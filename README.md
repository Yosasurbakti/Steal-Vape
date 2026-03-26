# Steal Vape - Premium Vape Store Website

Website e-commerce modern untuk Steal Vape dengan desain yang stylish dan user-friendly.

## 🌟 Fitur

- **Desain Modern & Responsif** - Layout mirip Foom dengan estetika kekinian
- **Integrasi WhatsApp** - Order langsung via WhatsApp
- **Background Animasi** - Efek background khusus saat scroll produk
- **Smooth Animations** - Parallax dan hover effects
- **Mobile Friendly** - Responsive di semua device

## 📁 Struktur File

```
steal-vape-project/
├── index.html          # Halaman utama
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   └── images/
│       └── logo.jpg    # Logo Steal Vape
└── README.md           # Dokumentasi
```

## 🚀 Cara Upload ke GitHub

### 1. Buat Repository Baru di GitHub
1. Buka [GitHub](https://github.com)
2. Klik tombol **"New"** atau **"+"** di pojok kanan atas
3. Pilih **"New repository"**
4. Isi nama repository: `steal-vape-website`
5. Pilih **Public** atau **Private**
6. **JANGAN** centang "Initialize this repository with a README"
7. Klik **"Create repository"**

### 2. Upload via GitHub Web Interface (Cara Mudah)

1. Di halaman repository baru Anda, klik **"uploading an existing file"**
2. Drag & drop semua file dan folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - folder `assets/` (dengan isinya)
   - `README.md`
3. Scroll ke bawah, tulis commit message: "Initial commit - Steal Vape website"
4. Klik **"Commit changes"**

### 3. Upload via Git Command Line (Cara Advanced)

```bash
# Di folder steal-vape-project, jalankan:
git init
git add .
git commit -m "Initial commit - Steal Vape website"
git branch -M main
git remote add origin https://github.com/USERNAME/steal-vape-website.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda.

## 🌐 Deploy ke GitHub Pages (Website Langsung Online!)

### Cara 1: Via Settings (Mudah)
1. Buka repository Anda di GitHub
2. Klik **Settings** (tab paling kanan)
3. Scroll ke bagian **Pages** di menu kiri
4. Di bagian **Source**, pilih **"Deploy from a branch"**
5. Branch: pilih **main**, folder: pilih **/ (root)**
6. Klik **Save**
7. Tunggu 1-2 menit, refresh halaman
8. Website Anda akan live di: `https://USERNAME.github.io/steal-vape-website/`

### Cara 2: Via GitHub Actions (Otomatis)
Repository sudah siap untuk deployment otomatis!

## 📱 Kontak

- **WhatsApp**: +62 821-1472-3789
- **Email**: info@stealvape.com

## 📝 Customisasi

Untuk mengganti konten:

### Ubah Produk
Edit file `index.html`, cari section `<div class="products-container">` dan sesuaikan:
- Nama produk
- Deskripsi
- Harga
- Emoji icon

### Ubah Warna
Edit file `style.css`, bagian `:root`:
```css
:root {
    --primary: #8b5cf6;    /* Warna utama */
    --secondary: #ec4899;  /* Warna sekunder */
    --dark: #0f0f23;       /* Background */
}
```

### Ubah Nomor WhatsApp
Cari semua instance `6282114723789` di `index.html` dan `script.js`, ganti dengan nomor baru.

## 🎨 Teknologi

- HTML5
- CSS3 (Gradients, Animations, Flexbox, Grid)
- Vanilla JavaScript
- Responsive Design

## 📄 License

© 2024 Steal Vape. All Rights Reserved.

---

**Developed with ❤️ for Steal Vape**
