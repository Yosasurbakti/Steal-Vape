// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Vape Background Effect on Scroll
const vapeBg = document.getElementById('vapeBg');
const productsSection = document.getElementById('products');

window.addEventListener('scroll', () => {
    const rect = productsSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
        vapeBg.classList.add('active');
    } else {
        vapeBg.classList.remove('active');
    }
});

// WhatsApp Order Function
function orderWhatsApp(productName, price) {
    const message = `Halo Steal Vape, saya ingin memesan:\n\nProduk: ${productName}\nHarga: ${price}\n\nMohon info lebih lanjut. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282114723789?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    // --- SISTEM KERANJANG LOCALSTORAGE ---

// 1. Cek apakah ada data keranjang di memori browser, jika tidak buat array kosong
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 2. Fungsi untuk menambah barang ke keranjang
function addToCart(id, name, price) {
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1; // Jika barang sudah ada, tambah jumlahnya
    } else {
        cart.push({ id: id, name: name, price: price, qty: 1 }); // Jika baru, masukkan ke daftar
    }
    saveCart();
    updateCartUI();
    
    // Tampilkan sidebar otomatis saat barang ditambahkan
    document.getElementById('cartSidebar').classList.add('active');
}

// 3. Fungsi untuk menyimpan ke memori browser (agar tidak hilang saat refresh)
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 4. Fungsi untuk memunculkan/menyembunyikan sidebar keranjang
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

// 5. Fungsi untuk mengubah jumlah barang (Tombol + dan -)
function changeQty(id, amount) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.qty += amount;
        if (item.qty <= 0) {
            // Hapus barang jika jumlahnya jadi 0
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        updateCartUI();
    }
}

// 6. Fungsi untuk memperbarui tampilan HTML keranjang
function updateCartUI() {
    let cartItemsDiv = document.getElementById('cartItems');
    let cartTotalSpan = document.getElementById('cartTotal');
    let cartCountSpan = document.getElementById('cartCount');

    cartItemsDiv.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        count += item.qty;

        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>Rp ${item.price.toLocaleString('id-ID')}</p>
                </div>
                <div class="qty-control">
                    <button onclick="changeQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </div>
        `;
    });

    cartTotalSpan.innerText = total.toLocaleString('id-ID');
    if(cartCountSpan) cartCountSpan.innerText = count;
}

// 7. Fungsi untuk mengirim format pesanan ke WhatsApp
function checkoutWA() {
    if (cart.length === 0) {
        alert("Keranjang kamu masih kosong!");
        return;
    }

    let waNumber = "6281234567890"; // PENTING: Ganti dengan nomor WhatsApp Toko Kamu (Mulai dengan 62)
    let message = "Halo Steal Vape, saya ingin memesan:\n\n";
    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `- ${item.name} (${item.qty}x) = Rp ${itemTotal.toLocaleString('id-ID')}\n`;
    });

    message += `\n*Total Belanja: Rp ${total.toLocaleString('id-ID')}*\n\nMohon informasi pembayarannya. Terima kasih!`;

    let waURL = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(waURL, '_blank');
}

// Jalankan fungsi update tampilan saat website pertama kali dibuka
document.addEventListener('DOMContentLoaded', updateCartUI);
});
