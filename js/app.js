document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("crud-form"); 
    const veriTablosu = document.getElementById("veri-tablosu");
    const ekleButton = document.getElementById("ekle-button");

    ekleButton.addEventListener("click", function (e) {
        e.preventDefault();

        const ad = document.getElementById("ad").value;
        const soyad = document.getElementById("soyad").value;
        const yas = document.getElementById("yas").value;

        if (ad && soyad && yas)
        {
            const row = veriTablosu.insertRow();
            
            const sutun1 = row.insertCell(0);
            const sutun2 = row.insertCell(1);
            const sutun3 = row.insertCell(2);
            const sutun4 = row.insertCell(3);

            sutun1.innerHTML = ad;
            sutun2.innerHTML = soyad;
            sutun3.innerHTML = yas;
            sutun4.innerHTML = '<button onclick="duzenle(this)">Düzenle</button> <button onclick="sil(this)">Sil</button>';

            form.reset();
        } 
        else 
        {
            alert("Herhangi bir alan boş bırakılamaz.");
        }   
    });
});

function duzenle(button) {
    const row = button.parentNode.parentNode;

    const ad = row.cells[0].innerHTML;
    const soyad = row.cells[1].innerHTML;
    const yas = row.cells[2].innerHTML;

    const yeniAd = prompt("Yeni Ad:", ad);
    const yeniSoyad = prompt("Yeni Soyad:", soyad);
    const yeniYas = prompt("Yeni Yaş:", yas);

    if (yeniAd !== "" && yeniSoyad !== "" && yeniYas !== "") {
        row.cells[0].innerHTML = yeniAd;
        row.cells[1].innerHTML = yeniSoyad;
        row.cells[2].innerHTML = yeniYas;
    } else {
        alert("Tüm alanları doldurun.");
    }
}

function sil(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
