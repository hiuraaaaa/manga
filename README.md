
# Manga Reader – Vite + Tailwind (Webtoon Mode + Pagination)

Fitur:
- **Webtoon mode** (scroll vertikal panjang) — toggle di navbar reader.
- **Pagination daftar episode** (Naik/Turun, page number, per page 10/20/30/50).
- UI Android-like + bottom tab bar, Beranda (banner/riwayat/rekomendasi), Pencarian, Favorit, Dashboard JSON.

Jalankan:
```bash
npm i
npm run dev
```

Deploy Vercel: sudah ada `vercel.json` (static build → `dist`).

Struktur penting:
- `src/routes/Reader.tsx` → webtoon/page toggle
- `src/routes/Series.tsx` → pagination + sorting
- `src/components/Pagination.tsx`
- `src/store/manga.json`
- `public/manga/<slug>/<chapter>/<001>.png`

Catatan: Gambar placeholder tersedia untuk 12 episode pertama **boss-sombong**. Episode lainnya contoh data (silakan tambah gambarnya).
