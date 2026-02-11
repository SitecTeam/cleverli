const svgModules = import.meta.glob("/src/svgs/**/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function resolveSvg(path: string): string {
  const key = `/src/svgs/${path}`;
  const url = svgModules[key];
  if (!url) {
    console.warn(`SVG not found: ${path}`);
    return "";
  }
  return url;
}
