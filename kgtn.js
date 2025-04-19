function tambahKegiatan() {
    const input = document.getElementById("input");
    const teks = input.value.trim();
  
    if (teks === "") {
      alert("Silakan tulis kegiatannya dulu!");
      return;
    }
  
    const daftar = document.getElementById("daftar-kegiatan");
  
    // Buat item kegiatan
    const item = document.createElement("li");
  
    // Buat checkbox
    const ceklis = document.createElement("input");
    ceklis.type = "checkbox";
  
    // Buat teks kegiatan
    const teksKegiatan = document.createElement("span");
    teksKegiatan.textContent = teks;
  
    // Ketika dicentang
    ceklis.onchange = function () {
      if (ceklis.checked) {
        teksKegiatan.classList.add("selesai");
      } else {
        teksKegiatan.classList.remove("selesai");
      }
    };
  
    // Gabungkan ke dalam <li>
    item.appendChild(ceklis);
    item.appendChild(teksKegiatan);
  
    // Tambahkan ke daftar
    daftar.appendChild(item);
  
    // Kosongkan input
    input.value = "";
  }