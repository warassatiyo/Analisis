// ======= Deklarasi Data =======
const dataAlternatif = [
  { nama: "Iphone 12 Pro Max", harga: 16000000, ram: 6, memori: 256, kamera: 12, layar: 6.7 },
  { nama: "Iphone 12 Pro", harga: 14000000, ram: 4, memori: 256, kamera: 12, layar: 6.1 },
  { nama: "Iphone 12 Mini", harga: 11000000, ram: 6, memori: 256, kamera: 12, layar: 5.4 },
  { nama: "Iphone 11 Pro Max", harga: 17000000, ram: 4, memori: 256, kamera: 12, layar: 6.5 },
  { nama: "Iphone 11", harga: 9500000, ram: 4, memori: 256, kamera: 12, layar: 6.1 },
  { nama: "Iphone XR", harga: 9000000, ram: 4, memori: 128, kamera: 12, layar: 6.1 },
  { nama: "Iphone XS", harga: 8500000, ram: 4, memori: 256, kamera: 12, layar: 5.8 },
  { nama: "Iphone XS Max", harga: 9000000, ram: 4, memori: 256, kamera: 12, layar: 6.5 },
  { nama: "Iphone X", harga: 7500000, ram: 4, memori: 256, kamera: 12, layar: 5.8 },
  { nama: "Iphone 8+", harga: 5500000, ram: 3, memori: 256, kamera: 12, layar: 5.5 },
  { nama: "Iphone 8", harga: 5000000, ram: 2, memori: 128, kamera: 12, layar: 4.7 },
  { nama: "Iphone 7+", harga: 3500000, ram: 3, memori: 128, kamera: 12, layar: 5.5 },
  { nama: "Iphone 7", harga: 3200000, ram: 2, memori: 128, kamera: 12, layar: 4.7 },
  { nama: "Iphone 6S Plus", harga: 2500000, ram: 2, memori: 64, kamera: 12, layar: 4.7 },
  { nama: "Samsung Note 20", harga: 1800000, ram: 2, memori: 256, kamera: 12, layar: 6.9 },
  { nama: "Samsung Galaxy M11", harga: 1800000, ram: 2, memori: 128, kamera: 12, layar: 6.5 },
  { nama: "Samsung Galaxy A10", harga: 4600000, ram: 3, memori: 128, kamera: 12, layar: 6.7 },
  { nama: "Samsung Galaxy M5", harga: 1900000, ram: 3, memori: 128, kamera: 12, layar: 6.5 },
  { nama: "Samsung Galaxy M12", harga: 1900000, ram: 3, memori: 128, kamera: 12, layar: 6.5 },
  { nama: "Samsung Galaxy A52", harga: 1900000, ram: 3, memori: 128, kamera: 12, layar: 6.5 },
  { nama: "Oppo Reno4", harga: 5400000, ram: 8, memori: 256, kamera: 64, layar: 6.4 },
  { nama: "Oppo A54", harga: 2500000, ram: 4, memori: 64, kamera: 13, layar: 6.5 },
  { nama: "Oppo A15", harga: 2500000, ram: 4, memori: 64, kamera: 13, layar: 6.5 },
  { nama: "Oppo A74", harga: 4000000, ram: 6, memori: 128, kamera: 12, layar: 6.5 },
  { nama: "Vivo Y12", harga: 1800000, ram: 3, memori: 64, kamera: 8, layar: 6.5 },
  { nama: "Vivo Y20", harga: 2200000, ram: 4, memori: 64, kamera: 4, layar: 6.5 },
  { nama: "Vivo V20 SE", harga: 3800000, ram: 8, memori: 128, kamera: 12, layar: 6.5 }
];

const dataKriteria = [
  { kriteria: "Harga", bobot: 0.25, tipe: "cost" },
  { kriteria: "RAM", bobot: 0.20, tipe: "benefit" },
  { kriteria: "Memori Internal", bobot: 0.20, tipe: "benefit" },
  { kriteria: "Kamera", bobot: 0.20, tipe: "benefit" },
  { kriteria: "Layar", bobot: 0.15, tipe: "benefit" }
];

const dataUser = [
  { username: "admin1", role: "admin" },
  { username: "karyawan1", role: "karyawan" }
];

let editIndexKriteria = -1;

// ======= Fungsi Notifikasi =======
function showNotif(pesan) {
  alert(pesan);
}

// ======= Saat Halaman Dimuat =======
document.addEventListener("DOMContentLoaded", () => {
  renderData(dataKriteria, 'tbody-kriteria', formatKriteria);
  renderData(dataUser, 'tbody-user', formatUser);
  renderData(dataAlternatif, 'tbody-alternatif', formatAlternatif);

  const toggle = document.getElementById('mode-toggle');
  const body = document.body;

  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }

  toggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
  });
});

// ======= Render Data =======
function renderData(array, tbodyId, formatFn) {
  const tbody = document.getElementById(tbodyId);
  if (tbody) {
    tbody.innerHTML = array.map(formatFn).join('');
  }
}

// ======= Format Tabel =======
function formatAlternatif(item, i) {
  return `
    <tr>
      <td>${item.nama}</td><td>${item.harga}</td><td>${item.ram}</td>
      <td>${item.memori}</td><td>${item.kamera}</td><td>${item.layar}</td>
      <td><button class="btn" onclick="hapusAlternatif(${i})">Hapus</button></td>
    </tr>`;
}

function formatKriteria(item, i) {
  return `
    <tr>
      <td>${item.kriteria}</td><td>${item.bobot}</td><td>${item.tipe}</td>
      <td>
        <button class="btn" onclick="editKriteria(${i})">Edit</button>
        <button class="btn" onclick="hapusKriteria(${i})">Hapus</button>
      </td>
    </tr>`;
}

function formatUser(item, i) {
  return `
    <tr>
      <td>${item.username}</td><td>${item.role}</td>
      <td><button class="btn" onclick="hapusUser(${i})">Hapus</button></td>
    </tr>`;
}

// ======= Form Alternatif =======
document.getElementById('form-alternatif')?.addEventListener('submit', e => {
  e.preventDefault();
  const { nama, harga, ram, memori, kamera, layar } = e.target.elements;

  if (!nama.value || !harga.value || !ram.value || !memori.value || !kamera.value || !layar.value) {
    return showNotif("Semua field harus diisi!");
  }

  dataAlternatif.push({
    nama: nama.value,
    harga: parseFloat(harga.value),
    ram: parseInt(ram.value),
    memori: parseInt(memori.value),
    kamera: parseInt(kamera.value),
    layar: parseFloat(layar.value)
  });

  renderData(dataAlternatif, 'tbody-alternatif', formatAlternatif);
  e.target.reset();
  showNotif('Alternatif berhasil ditambahkan!');
});

function hapusAlternatif(i) {
  if (confirm("Yakin ingin menghapus alternatif ini?")) {
    dataAlternatif.splice(i, 1);
    renderData(dataAlternatif, 'tbody-alternatif', formatAlternatif);
  }
}

// ======= Form Kriteria =======
document.getElementById('form-kriteria')?.addEventListener('submit', e => {
  e.preventDefault();
  const { namaKriteria, bobotKriteria, tipeKriteria } = e.target.elements;

  const data = {
    kriteria: namaKriteria.value,
    bobot: parseFloat(bobotKriteria.value),
    tipe: tipeKriteria.value
  };

  if (!data.kriteria || isNaN(data.bobot) || !data.tipe) {
    return showNotif("Semua field kriteria wajib diisi!");
  }

  if (editIndexKriteria === -1) {
    dataKriteria.push(data);
    showNotif('Kriteria berhasil ditambahkan!');
  } else {
    dataKriteria[editIndexKriteria] = data;
    editIndexKriteria = -1;
    e.target.querySelector('button').textContent = 'Tambah';
    showNotif('Kriteria berhasil diperbarui!');
  }

  renderData(dataKriteria, 'tbody-kriteria', formatKriteria);
  e.target.reset();
});

function editKriteria(i) {
  const k = dataKriteria[i];
  document.getElementById("namaKriteria").value = k.kriteria;
  document.getElementById("bobotKriteria").value = k.bobot;
  document.getElementById("tipeKriteria").value = k.tipe;

  editIndexKriteria = i;
  document.querySelector("#form-kriteria button").textContent = "Simpan Perubahan";
}

function hapusKriteria(i) {
  if (confirm("Yakin ingin menghapus kriteria ini?")) {
    dataKriteria.splice(i, 1);
    renderData(dataKriteria, 'tbody-kriteria', formatKriteria);
  }
}

// ======= Form User =======
document.getElementById('form-user')?.addEventListener('submit', e => {
  e.preventDefault();
  const { username, role } = e.target.elements;

  if (!username.value || !role.value) {
    return showNotif("Username dan Role harus diisi!");
  }

  dataUser.push({
    username: username.value,
    role: role.value
  });

  renderData(dataUser, 'tbody-user', formatUser);
  e.target.reset();
  showNotif('User berhasil ditambahkan!');
});

function hapusUser(i) {
  if (confirm("Yakin ingin menghapus user ini?")) {
    dataUser.splice(i, 1);
    renderData(dataUser, 'tbody-user', formatUser);
  }
}

function hitungSAW() {
  if (dataAlternatif.length === 0 || dataKriteria.length === 0) {
    return showNotif("Data alternatif dan kriteria harus tersedia terlebih dahulu!");
  }

  // Step 1: Buat matrix normalisasi
  const matrix = dataAlternatif.map(alt => {
    return {
      nama: alt.nama,
      nilai: dataKriteria.map(kriteria => {
        let nilai = 0;
        switch (kriteria.kriteria.toLowerCase()) {
          case 'harga':
            nilai = alt.harga;
            break;
          case 'ram':
            nilai = alt.ram;
            break;
          case 'memori internal':
            nilai = alt.memori;
            break;
          case 'kamera':
            nilai = alt.kamera;
            break;
          case 'layar':
            nilai = alt.layar;
            break;
          default:
            nilai = 0;
        }
        return nilai;
      })
    };
  });

  // Step 2: Normalisasi
  const normalisasi = matrix.map(item => ({ ...item, nilai: [...item.nilai] }));

  dataKriteria.forEach((kriteria, idx) => {
    const kolom = matrix.map(m => m.nilai[idx]);
    const max = Math.max(...kolom);
    const min = Math.min(...kolom);

    normalisasi.forEach((item, i) => {
      if (kriteria.tipe === 'benefit') {
        item.nilai[idx] = item.nilai[idx] / max;
      } else {
        item.nilai[idx] = min / item.nilai[idx];
      }
    });
  });

  // Step 3: Hitung nilai akhir
  const hasil = normalisasi.map((item, i) => {
    const total = item.nilai.reduce((sum, val, idx) => {
      return sum + (val * dataKriteria[idx].bobot);
    }, 0);

    return {
      alternatif: item.nama,
      nilaiAkhir: total
    };
  });

  // Step 4: Urutkan dan berikan ranking
  hasil.sort((a, b) => b.nilaiAkhir - a.nilaiAkhir);
  hasil.forEach((item, i) => {
    item.ranking = i + 1;
  });

  // Tampilkan ke tabel
  const tbody = document.getElementById('tbody-hasil');
  tbody.innerHTML = hasil.map(item => `
    <tr>
      <td>${item.alternatif}</td>
      <td>${item.nilaiAkhir.toFixed(4)}</td>
      <td>${item.ranking}</td>
    </tr>
  `).join('');
}
