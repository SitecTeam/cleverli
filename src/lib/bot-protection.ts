/**
 * Bot protection using Vercel's botid.
 *
 * Client-side: `initBotId` patches `window.fetch` to inject challenge headers
 * on protected routes. It loads Vercel-specific scripts, so it MUST only run
 * on Vercel — on Cloudflare or local dev the challenge script would 404 and
 * break all form submissions.
 *
 * Server-side: `checkBotId` verifies the challenge headers. On non-Vercel
 * environments it is skipped entirely.
 *
 * The build-time constant `__IS_VERCEL__` (injected via vite `define` in
 * astro.config.mjs) gates all client-side usage. Server-side uses
 * `process.env.VERCEL` directly.
 */

declare const __IS_VERCEL__: boolean;

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

let initialized = false;

/**
 * Call once from any React island that contains a protected form.
 * Safe to call multiple times — subsequent calls are no-ops.
 */
export function ensureBotProtection(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  if (!__IS_VERCEL__) return; // only available on Vercel

  try {
    // Dynamic import so the botid client bundle is tree-shaken on
    // non-Vercel builds (the `if` above is a dead-code constant).
    import("botid/client/core")
      .then(({ initBotId }) => {
        initBotId({
          protect: [
            { path: "/api/send-message.json", method: "POST" },
            { path: "/api/schedule-consultation.json", method: "POST" },
          ],
        });
      })
      .catch(e => {
        console.warn("[bot-protection] Failed to load botid client:", e);
      });
  } catch (e) {
    console.warn("[bot-protection] Failed to initialise botid:", e);
  }
}

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

/**
 * Returns `true` if the request was made by a detected bot.
 * On non-Vercel environments this always returns `false` (not a bot)
 * so honeypot + spam checks still run as the primary defence.
 */
export async function isBot(request: Request): Promise<boolean> {
  // Only run on Vercel — VERCEL env var is set automatically by Vercel
  const isVercel =
    typeof import.meta.env !== "undefined" && !!import.meta.env.VERCEL;
  if (!isVercel) return false;

  try {
    const { checkBotId } = await import("botid/server");

    // Convert fetch Headers to plain object for node:http IncomingHttpHeaders
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    const result = await checkBotId({
      advancedOptions: { headers },
    });

    // Allow verified bots (e.g. Googlebot) through
    if (result.isBot && !result.isVerifiedBot) {
      return true;
    }

    return false;
  } catch (e) {
    console.warn("[bot-protection] checkBotId failed:", e);
    return false; // fail open — honeypot & spam still protect
  }
}
