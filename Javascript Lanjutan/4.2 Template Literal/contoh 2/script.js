const lagu = [
    {
        judul: "Lagu 1",
        penyanyi: "Penyanyi 1"
    },
    {
        judul: "Lagu 2",
        penyanyi: "Penyanyi 2"
    },
    {
        judul: "Lagu 3",
        penyanyi: "Penyanyi 3",
        feat: "Penyanyi lain 1"
    },
    {
        judul: "Lagu 4",
        penyanyi: "Penyanyi 4"
    },
    {
        judul: "Lagu 5",
        penyanyi: "Penyanyi 5",
        feat: "Penyanyi lain 2"
    }
]

const el = `<ul>
    ${lagu.map(el => `<li>
            <h2>${el.judul}</h2>
            <p>By ${el.penyanyi}</p>
            ${el.feat ? `Feat ${el.feat}` : ``}
        </li>`).join('')}
</ul>`

document.body.innerHTML = el;