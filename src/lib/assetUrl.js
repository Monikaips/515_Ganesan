/** Public-folder asset path that respects Vite `base` (GitHub Pages). */
export function assetUrl(path) {
  const clean = String(path).replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
