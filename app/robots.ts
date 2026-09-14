import type { MetadataRoute } from 'next';
import { allowIndexing } from './site-settings';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return { rules: allowIndexing ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' } };
}
