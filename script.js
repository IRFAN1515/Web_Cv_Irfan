document.addEventListener('DOMContentLoaded', function() {
    const whatsappCallButton = document.querySelector('.btn-call');
    const message = "Halo, saya tertarik untuk berkomunikasi dengan Irfan Rizky Putra";
  
    whatsappCallButton.href = `https://api.whatsapp.com/send?phone=6289524804049&text=${encodeURIComponent(message)}`;
  });
  

  // Mengubah warna latar belakang ketika gambar profil diklik
const profileImage = document.querySelector('img');
profileImage.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Mengubah judul halaman saat diklik
const pageTitle = document.querySelector('h1');
pageTitle.addEventListener('click', () => {
  pageTitle.textContent = 'Selamat datang di Portofolio Irfan Rizky Putra';
});

// Menampilkan jumlah skill yang dimiliki
const skillList = document.querySelectorAll('.skills li');
const skillCount = document.getElementById('skill-count');
skillCount.textContent = skillList.length;

// Menampilkan pesan ketika tombol Email diklik
const emailButton = document.querySelector('.btn-email');
emailButton.addEventListener('click', () => {
  alert('Email berhasil dikirim!');
});

// Menampilkan pesan ketika tombol Whatsapp diklik
const whatsappButton = document.querySelector('.btn-call');
whatsappButton.addEventListener('click', () => {
  alert('Pesan Whatsapp terkirim!');
});
