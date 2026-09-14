// Indexing is an explicit launch decision, never enabled for a sales preview.
function publicOrigin(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return undefined;
    if (url.hostname === 'localhost' || url.hostname.endsWith('.local') || /^\d+(\.\d+){3}$/.test(url.hostname)) return undefined;
    return url.origin;
  } catch { return undefined; }
}

export const siteOrigin = publicOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export const allowIndexing = Boolean(siteOrigin && process.env.SITE_ALLOW_INDEXING === 'true');
