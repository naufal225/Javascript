// HTML Fragment

const siswa = [
    {
        nama: "Budi",
        nis: "232410104"
    },
    {
        nama: "Cecep",
        nis: "232410105"
    },
    {
        nama: "Dedi",
        nis: "232410106"
    },
    {
        nama: "Edi",
        nis: "232410107"
    },
    {
        nama: "Fandi",
        nis: "232410108"
    },
    {
        nama: "Galih",
        nis: "232410109"
    },
    {
        nama: "Hadi",
        nis: "232410110"
    }
]

let el = `<div class="siswa">
    <ul>
        ${siswa.map(e => 
            `<li>
                <h3>${e.nama}</h3>
                <span>${e.nis}</span>
            </li>`
        ).join('')}
    </ul>
</div>`

document.body.innerHTML = el;