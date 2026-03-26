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
});
