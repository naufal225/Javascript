// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]')); // ambil element yang ada atribut data-duration

// pilih hanya playlist lanjutan
const playlist_lanjutan = videos.filter(video => video.textContent.includes("PLAYLIST LANJUTAN |"))

// ambil durasi masing masing video
    .map(video => video.dataset.duration)

// ubah durasi menjadi int, ubah menit jadi detik
    .map(waktu => {
        const parts = waktu.split(":");
        return (parseInt(parts[0])*60) + parseInt(parts[1]);
    })

// jumlahkan semua detik
    .reduce((acc, v) => acc + v);

// ubah jadi format jam menit detik
const jam = Math.floor(playlist_lanjutan / 3600);
const menit = Math.floor((playlist_lanjutan / 60) % 60);
const detik = Math.floor(playlist_lanjutan % 60);

// simpan di DOM

const pDurasi = document.querySelector('.jumlah-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jVideo = document.querySelector('.jumlah-video');
jVideo.textContent = videos.length;