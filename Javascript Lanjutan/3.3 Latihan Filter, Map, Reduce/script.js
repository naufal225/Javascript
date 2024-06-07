// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya playlist lanjutan
const playlist_lanjutan = videos.filter(video => video.textContent.includes('PLAYLIST LANJUTAN |'))

// ambil durasi masing masing video
.map(video => video.dataset.duration)

// ubah menjadi int detik
.map(waktu => {
    const [menit, detik] = waktu.split(':');
    return (parseInt(menit) * 60) + parseInt(detik);
})

// jumlah semua detik
.reduce((acc,v) => acc + v);

// ubah jadi format jam, menit, detik
const jam = Math.floor(playlist_lanjutan / 3600);
const menit = Math.floor(playlist_lanjutan % 3600 /60);
const detik = Math.floor(playlist_lanjutan % 60);

// Masukan ke DOM

const pDurasi = document.querySelector('.jumlah-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const jVideo = document.querySelector('.jumlah-video');
jVideo.textContent = `${videos.length} Video`;
