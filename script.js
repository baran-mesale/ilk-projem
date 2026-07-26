// 1. Önce HTML'deki butonu 'id' numarası ile bulup, 'geceModuButonu' adında bir kutuya (değişkene) koyuyoruz.
let geceModuButonu = document.getElementById("gece-butonu");

// 2. Şimdi bu butona bir "Olay Dinleyici" (EventListener) ekliyoruz. Kulaklarını dikip "click" (tıklanma) anını bekleyecek.
geceModuButonu.addEventListener("click", function() {
    
    // 3. Butona tıklandığında süslü parantezlerin içindeki bu görev çalışacak:
    // Sayfanın gövdesini (body) bul, stiline git, arka plan rengini koyu gri yap.
    document.body.style.backgroundColor = "#121212";
    
    // Yazı rengini de okunabilmesi için beyaz yap.
    document.body.style.color = "#ffffff";
    
});