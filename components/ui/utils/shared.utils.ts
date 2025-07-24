export function getScreenSize(): "small" | "medium" | "large" {
  if (typeof window === "undefined") return "large"; // Default for SSR

  const width = window.innerWidth;

  if (width < 640) return "small";
  if (width < 1024) return "medium";
  return "large";
}
