import Link from 'next/link';
export default function NotFound() { return <main className="not-found wrap"><p className="eyebrow">HALAMAN TIDAK DITEMUKAN</p><h1>Cerita ini belum ada di atlas.</h1><Link className="arrow-link" href="/explore">Kembali menjelajah <span aria-hidden="true">↗</span></Link></main>; }
