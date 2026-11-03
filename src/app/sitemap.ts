import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return ['', 'explore','explore/bromo','stories','stories/di-balik-kabut-bromo','culture','culture/tongkonan','gallery','atlas','field-notes','about','contact'].map(path=>({url:`https://bentang.example/${path}`,lastModified:new Date('2026-11-03')})); }
