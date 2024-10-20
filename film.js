
// Typewriter (yazı yazma) efekti
document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});

let i = 0;
const txt =
    "Güçlü kadınların hikayelerini ve toplumsal cinsiyet eşitliği mücadelesini keşfedin. Her bir belgesel ve film, azmin ve kararlılığın önemini vurgularken, cesur kadınların deneyimlerinden ilham almanızı sağlıyor. Kendi potansiyelinizi keşfetmek için bu ilham verici yapımları izleyin çünkü her bir hikaye, zorluklara göğüs geren ve başarıya ulaşan kadınların azmiyle doludur. Eğitimin, öz güvenin ve dayanışmanın önemiyle şekillenen bu yapımlarla, geleceğinizi daha parlak bir hale getirmek için gereken motivasyonu elde edin.";
const speed = 25;  // Yazma hızı (milisaniye)

function typeWriter() {
    if (i < txt.length) {  // Metindeki harfleri sırayla yazdır
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        // Eğer bir nokta (cümle sonu) varsa 0.5 saniye durakla
        if (txt.charAt(i - 1) === ".") {
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, speed);
        }
    }
}