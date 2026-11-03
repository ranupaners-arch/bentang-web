import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://bentang.example'),
  authors: [{ name: 'Ranupane', url: 'https://github.com/ranupaners-arch' }],
  applicationName: 'KukerjainAja · BENTANG',
  title: { default: 'BENTANG — Setiap Tempat Punya Cerita', template: '%s — BENTANG' },
  description: 'Ruang editorial untuk menyusuri alam, budaya, dan cerita Indonesia melalui fotografi dan pengetahuan.',
  openGraph: { title: 'BENTANG — Setiap Tempat Punya Cerita', description: 'Menyusuri alam, budaya, dan cerita Indonesia.', type: 'website', locale: 'id_ID' },
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><a className="skip-link" href="#main">Lewati ke konten</a><SiteShell><main id="main">{children}</main></SiteShell></body></html>;
}
