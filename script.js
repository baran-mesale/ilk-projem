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