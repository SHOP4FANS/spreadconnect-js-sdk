export function toQueryString(params: Record<string, any>): string {
  const esc = encodeURIComponent;
  return Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${esc(k)}=${esc(v)}`)
    .join("&");
}
