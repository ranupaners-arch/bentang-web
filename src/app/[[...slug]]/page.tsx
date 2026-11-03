import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageView } from '@/components/PageView';

const routes = ['', 'explore', 'explore/bromo', 'stories', 'stories/di-balik-kabut-bromo', 'culture', 'culture/tongkonan', 'gallery', 'atlas', 'field-notes', 'about', 'contact'];
const titles: Record<string,string> = {
  '':'Indonesia, lebih dari sekadar pemandangan.', explore:'Jelajahi tempat, temukan perspektif.', 'explore/bromo':'Bromo. Antara bumi dan langit.',
  stories:'Cerita yang membuat tempat terasa dekat.', 'stories/di-balik-kabut-bromo':'Di Balik Kabut Bromo', culture:'Warisan yang terus hidup.', 'culture/tongkonan':'Tongkonan: Rumah, Identitas, Ingatan.',
  gallery:'Melihat lebih lama.', atlas:'Indonesia dalam titik-titik cerita.', 'field-notes':'Catatan kecil dari perjalanan yang besar.', about:'Mengikuti garis yang dibentuk alam dan manusia.', contact:'Ada cerita yang ingin kamu bagikan?'
};
export function generateStaticParams() { return routes.map(route => ({ slug: route ? route.split('/') : [] })); }
export async function generateMetadata({ params }: { params: Promise<{slug?:string[]}> }): Promise<Metadata> {
  const {slug=[]}=await params; const key=slug.join('/'); const title=titles[key] ?? 'BENTANG';
  return { title, description: `${title} Setiap tempat menyimpan lapisan geografi, kehidupan, dan cerita.`, alternates: { canonical: key ? `/${key}` : '/' }, openGraph: { title: `${title} — BENTANG`, description: 'Setiap tempat punya cerita.' } };
}
export default async function Page({ params }: { params: Promise<{slug?:string[]}> }) { const {slug=[]}=await params; const route=slug.join('/'); if(!routes.includes(route)) notFound(); return <PageView route={route} />; }
