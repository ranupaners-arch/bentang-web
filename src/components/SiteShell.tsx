'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { credits, images } from '@/data/content';

const links=[['Explore','/explore'],['Stories','/stories'],['Culture','/culture'],['Gallery','/gallery'],['Atlas','/atlas'],['About','/about']];
export function SiteShell({children}:{children:React.ReactNode}) {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const pathname=usePathname();
  const heroRoute=pathname==='/'||pathname==='/explore/bromo'||pathname==='/culture/tongkonan';
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>28); update(); window.addEventListener('scroll',update,{passive:true}); return()=>window.removeEventListener('scroll',update)},[]);
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
  return <><header className={`site-header ${heroRoute&&!scrolled?'over-hero':''} ${scrolled?'is-scrolled':''}`}><Link className="wordmark" href="/" aria-label="BENTANG, halaman utama">BENTANG</Link><nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([name,href])=><Link href={href} key={href}>{name}</Link>)}</nav><Link className="contact-link" href="/contact">Bagikan Ide <span aria-hidden="true">↗</span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'Tutup':'Menu'} <span aria-hidden="true">{open?'−':'+'}</span></button></header>
  {open&&<nav className="mobile-menu" id="mobile-menu" aria-label="Navigasi seluler">{links.map(([name,href],i)=><Link href={href} key={href} onClick={()=>setOpen(false)}><small>0{i+1}</small>{name}<span>↗</span></Link>)}<Link href="/field-notes" onClick={()=>setOpen(false)}><small>07</small>Field Notes<span>↗</span></Link><Link href="/contact" onClick={()=>setOpen(false)}><small>08</small>Contact<span>↗</span></Link></nav>}
  {children}<footer className="site-footer"><div className="footer-top"><div><Link href="/" className="footer-wordmark">BENTANG</Link><p>Setiap tempat punya cerita.</p></div><p className="footer-note">Ruang digital untuk menyusuri alam, budaya, dan cerita Indonesia. Sebuah konsep demonstrasi editorial.</p><div className="footer-nav"><span>JELAJAHI</span><Link href="/explore">Explore</Link><Link href="/stories">Stories</Link><Link href="/culture">Culture</Link><Link href="/atlas">Atlas</Link><Link href="/field-notes">Field Notes</Link></div></div><div className="credit-strip"><span>© BENTANG · KONSEP DEMO</span><Link href="/about">Tentang proyek</Link><Link href="/contact">Kirim usulan</Link><span>Kredit foto tercantum pada gambar · Unsplash License</span></div></footer></>;
}
export function Photo({name,alt,className='',position,priority=false}:{name:string;alt:string;className?:string;position?:string;priority?:boolean}) {return <div className={`photo ${className}`}><Image src={images[name]??images.raja} alt={alt} fill sizes="(max-width: 650px) 100vw, 50vw" priority={priority} unoptimized style={{objectFit:'cover',objectPosition:position??'center'}}/><span className="photo-credit">FOTO: {credits[name]??'UNSPLASH'} · UNSPLASH LICENSE</span></div>}
