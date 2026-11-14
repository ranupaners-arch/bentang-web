# Paste this into Codex (once the BENTANG PRD folder is in your repository)

Bangun website **BENTANG — An Interactive Journey Through Indonesia** berdasarkan dokumen proyek ini. Ini website editorial dan eksplorasi budaya/alam, **bukan e-commerce, travel booking, atau katalog barang**.

1. Baca seluruh dokumen berikut sebagai source of truth: `PRD_BENTANG.md`, `DESIGN.md`, `MOTION_SPEC.md`, `CONTENT_BLUEPRINT_12_HALAMAN.md`, `ASSET_MANIFEST.csv`, `ASSET_POLICY.md`, `AGENTS.md`.
2. Inspeksi repo, stack, branch, status, rules dan script terlebih dahulu. Jangan hapus struktur yang sudah ada. Jika proyek baru, setup Next.js App Router + TypeScript + Tailwind CSS.
3. Implementasikan semua 12 route dengan konten dan CTA yang benar-benar bekerja, mengikuti layout berbeda untuk tiap halaman. Gunakan design direction 70% Monocle editorial, 20% Cosmos gallery-first, 10% Wayfinder cinematic. Ciptakan visual BENTANG yang original, bukan clone.
4. Gunakan foto dari manifest; unduh dan simpan lokal jika bisa, kompres ke WebP/AVIF, beri alt dan kredit. Pinterest hanya untuk moodboard, bukan sumber aset produksi.
5. Buat interaksi nyata: Explore filter+search, Stories filter, Bromo/Tongkonan sticky-scroll ala contoh video (media kiri sticky, narasi kanan scrolling natural, berakhir di akhir parent, reverse scroll mulus), Gallery lightbox accessible, Atlas interactive + list fallback, Story TOC/progress, Contact validasi jujur dalam mode demo.
6. Motion detail ikuti `MOTION_SPEC.md`; CSS-first, reduced-motion, tidak scrolljacking. Jangan ganti sistem desain atau menambah efek dekoratif yang tidak diperlukan.
7. Audit 360/768/1024/1440, cek keyboard/focus, SEO, responsif, broken images/routes, lint, typecheck, build. Laporkan hasil tes sebenarnya dan file yang berubah.

**Aturan prioritas:** jangan membahas panjang lebar, jangan hanya membuat skeleton. Implementasikan secara bertahap sampai semua halaman terisi dan bisa digunakan. Bila ada keterbatasan akses foto/API peta, buat fallback yang benar dan catat keterbatasan; jangan klaim fitur selesai jika belum berjalan.
