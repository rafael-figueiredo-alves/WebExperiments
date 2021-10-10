function Carregar() {
    let data = new Date();
    let hora = data.getHours();
    let msg = window.document.querySelector('div.msg');
    let foto = window.document.querySelector('img.foto');

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`;
    

    if (hora >= 0 && hora < 12){
        foto.src = './images/fotomanha.png';
    } else if (hora >= 12 && hora <18){
        foto.src = './images/fototarde.png';
    } else {
        foto.src = './images/fotonoite.png';
    }
}