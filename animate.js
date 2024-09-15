document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a'); // Mengambil semua link
  
    // Fungsi untuk menangani transisi
    function handleLinkClick(event) {
      event.preventDefault(); // Mencegah link langsung membuka halaman
      const href = this.getAttribute('href'); // Dapatkan URL tujuan
  
      // Tambahkan kelas 'fade-out' untuk transisi keluar
      document.body.classList.add('fade-out');
  
      // Tunggu sampai transisi selesai (0.5 detik), baru pindah halaman
      setTimeout(() => {
        window.location.href = href; // Redirect ke halaman baru setelah transisi
      }, 500); // Sesuaikan durasi sesuai durasi transisi CSS
    }
  
    // Menambahkan event listener pada setiap link
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
  
    // Saat halaman di-load, tambahkan kelas 'active' untuk fade-in
    setTimeout(() => {
      document.body.classList.add('active');
    }, 100); // Delay sedikit sebelum fade-in
  });
  