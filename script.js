let geceModuButonu = document.getElementById("gece-butonu");

geceModuButonu.addEventListener("click", function() {
    // toggle: Eğer 'karanlik-tema' sınıfı yoksa ekler, varsa çıkarır. (Aç-Kapa mantığı)
    document.body.classList.toggle("karanlik-tema");
    
    // Butonun içindeki yazıyı da duruma göre değiştirelim
    if (document.body.classList.contains("karanlik-tema")) {
        geceModuButonu.innerText = "Gündüz Moduna Dön";
    } else {
        geceModuButonu.innerText = "Gece Modunu Aç";
    }
});

// Haritayı oluştur ve İznik Gölü koordinatlarına merkezle, yakınlaştırma seviyesini (zoom) 11 yap
const harita = L.map('harita').setView([40.4333, 29.7166], 11);

// Harita görsellerini (sokaklar, dağlar, göller) OpenStreetMap üzerinden çek
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(harita);

// 1. Kamp Alanı İçin Pin (İşaretçi) Ekleme
const kamp1 = L.marker([40.4500, 29.7500]).addTo(harita);
kamp1.bindPopup("<b>Kuzey Sahil Kamp Alanı</b><br>Göl kenarında sessiz ve ıssız bir nokta.");

// 2. Kamp Alanı İçin Pin (İşaretçi) Ekleme
const kamp2 = L.marker([40.4100, 29.6800]).addTo(harita);
kamp2.bindPopup("<b>Güney Orman Kampı</b><br>Ağaçların arasında harika bir doğa deneyimi.");

// İstediğin kadar pin ekleyebilirsin, sadece koordinatları değiştirmen yeterli!

// İznik'in koordinatları için Open-Meteo API adresi
const apiAdresi = 'https://api.open-meteo.com/v1/forecast?latitude=40.4333&longitude=29.7166&current_weather=true';

// fetch komutu ile adrese gidip veriyi çekiyoruz
fetch(apiAdresi)
  .then(cevap => cevap.json()) // Gelen ham veriyi düzenli JSON formatına çevir
  .then(veri => {
      // Veri başarıyla geldiğinde burası çalışır
      const sicaklik = veri.current_weather.temperature;
      
      // HTML'deki 'derece' id'li paragrafı bul ve sıcaklığı içine yaz
      document.getElementById('derece').innerHTML = `Şu anki sıcaklık: <strong>${sicaklik}°C</strong>`;
  })
  .catch(hata => {
      // Eğer internet yoksa veya bağlantı koparsa hata mesajı göster
      document.getElementById('derece').innerText = "Hava durumu verisi çekilemedi.";
      console.error("Veri çekme hatası:", hata);
  });