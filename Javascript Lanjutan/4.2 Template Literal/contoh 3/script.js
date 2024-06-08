const mhs = {
    nama: "Ahmad",
    umur: 20,
    mataKualiah : [
        "Mata Kuliah 1",
        "Mata Kuliah 2",
        "Mata Kuliah 3",
        "Mata Kuliah 4",
        "Mata Kuliah 5",
        "Mata Kuliah 6",
    ]
}

function apalah(param) {
    return `<ol>${param.map(element => `<li>${element}</li>`).join('')}</ol>`;
}

const el = `<div class="mhs">
    <ul>
        <li>
            <h3>${mhs.nama}</h3>
            <span>${mhs.umur}</span>
            <h4>Mata Kuliah : </h4>
            ${apalah(mhs.mataKualiah)}
        </li>
    </ul>
</div>`

document.body.innerHTML = el;