/**
 * Converts inline markdown bold syntax to HTML <strong> tags.
 * Only handles **bold** since that's the only formatting used in our content.
 */
export function inlineMarkdownToHtml(md: string): string {
  return md.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").trim();
}
