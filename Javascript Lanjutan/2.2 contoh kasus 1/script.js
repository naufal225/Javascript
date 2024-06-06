const box = document.querySelector('.box');
box.addEventListener('click', function (e){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains('size')){
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});