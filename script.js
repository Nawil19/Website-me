// Harga produk (hardcoded)
const hargaProduk = {
  "Laptop Gaming X1": 15000000,
  "Laptop Pelajar A2": 6000000,
  "Laptop Kantor B3": 9000000,
  "Laptop Premium C4": 18000000
};

// Tangani penyimpanan data transaksi saat checkout
if (document.getElementById("formTransaksi")) {
  document.getElementById("formTransaksi").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nama: document.getElementById("nama").value,
      email: document.getElementById("email").value,
      telepon: document.getElementById("telepon").value,
      alamat: document.getElementById("alamat").value,
      produk: document.getElementById("produk").value,
      jumlah: parseInt(document.getElementById("jumlah").value)
    };

    data.total = data.jumlah * hargaProduk[data.produk];

    localStorage.setItem("transaksi", JSON.stringify(data));
    window.location.href = "invoice.html";
  });
}

// Tampilkan data transaksi di halaman invoice
if (document.getElementById("outputInvoice")) {
  const data = JSON.parse(localStorage.getItem("transaksi"));
  if (data) {
    document.getElementById("outNama").textContent = data.nama;
    document.getElementById("outEmail").textContent = data.email;
    document.getElementById("outTelepon").textContent = data.telepon;
    document.getElementById("outAlamat").textContent = data.alamat;
    document.getElementById("outProduk").textContent = data.produk;
    document.getElementById("outJumlah").textContent = data.jumlah;
    document.getElementById("outTotal").textContent = `Rp${data.total.toLocaleString("id-ID")}`;
  }
}

// Fungsi beli produk langsung dari halaman produk
function pesanProduk(namaProduk) {
  localStorage.setItem("produkDipilih", namaProduk);
  window.location.href = "transaksi.html";
}

// Isi otomatis produk jika dibeli dari halaman produk
if (document.getElementById("produk")) {
  const preSelect = localStorage.getItem("produkDipilih");
  if (preSelect) {
    document.getElementById("produk").value = preSelect;
  }
}
