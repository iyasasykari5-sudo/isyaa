const pesan = document.getElementById("pesan");
const lagu = document.getElementById("lagu");
const container = document.getElementById("container");

/* TOMBOL MULAI */
function mulai() {
  if (container.requestFullscreen) {
    container.requestFullscreen();
  }

  lagu.play();

  const jam = new Date().getHours();

  const pesanPagi = [
    "Selamat pagi cantik 🌤️ semoga harimu lembut ya 🤍",
    "Hari baru, semangat baru ✨ aku percaya sama kamu",
    "Pelan-pelan aja hari ini, kamu sudah hebat 🐻",
    "Jangan lupa senyum ya, itu manis banget 🌷"
  ];

  const pesanMalam = [
    "Terima kasih sudah bertahan hari ini 🤍",
    "Kalau capek, istirahat yaa… aku ada 🫶",
    "Hari ini kamu sudah melakukan yang terbaik 🌙",
    "Tidur yang nyenyak ya cantik 🐻💤"
  ];

  // LOGIKA PAGI / MALAM
  if (jam >= 5 && jam < 18) {
    pesan.innerHTML =
      pesanPagi[Math.floor(Math.random() * pesanPagi.length)];
  } else {
    pesan.innerHTML =
      pesanMalam[Math.floor(Math.random() * pesanMalam.length)];
  }
}

/* SLIDER FOTO AUTO */
const slides = document.querySelectorAll(".slide");
let index = 0;

function slideFoto() {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(slideFoto, 3000);
