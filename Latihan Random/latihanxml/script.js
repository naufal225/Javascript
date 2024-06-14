const tabel = document.getElementById('table-data');
const tbody = tabel.querySelector('tbody');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'data/barang.json')

xhr.onreadystatechange = () => {
    if(xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.status == 200) {
            tbody.innerHTML = ``;
            let data = JSON.parse(xhr.responseText);
            data.forEach(e => {
                let tr = document.createElement('tr');
                tr.innerHTML = `<tr>
                    <td>${e.id}</td>
                    <td>${e.nama}</td>
                    <td>${e.jumlah}</td>
                    <td>${e.harga}</td>
                </tr>`
                 tbody.appendChild(tr);
            });
        } else {
            
        }
    }
}

xhr.send();