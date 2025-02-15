// 1. ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// 2. pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(value => value.textContent.includes('JAVASCRIPT LANJUTAN'))

    // 3. ambil durasi masing2 video
    .map(item => item.dataset.duration)

    // 4. ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        //10:30 -> split menjadi [10, 30]
        const parst = waktu.split(':').map(part => parseFloat(part));
        return (parst[0] * 60) + parst[1];
    })

    // 5. jumlahkan semua detiknya
    .reduce((akumulasi, nilaiSaatIni) => akumulasi + nilaiSaatIni, 0);

// 6. ubah format menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut -= jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// 7. simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

const jmlVideo = videos.filter(value => value.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`;