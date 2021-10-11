function Carregar() {
    let data = new Date();
    let hora = data.getHours();
    let msg = window.document.querySelector('div.msg');
    let foto = window.document.querySelector('img.foto');
    
    if (hora >= 0 && hora < 12){
        window.document.title = 'Bom dia!';
        msg.innerHTML = `<p><strong>Bom dia!</strong> Agora são ${hora} horas.</p>`;
        foto.src = './images/fotodia.png';
        window.document.body.style.backgroundColor = '#f2d2b5';
    } else if (hora >= 12 && hora <18){
        window.document.title = 'Boa tarde!'
        msg.innerHTML = `<p><strong>Boa tarde!</strong> Agora são ${hora} horas.</p>`;
        foto.src = './images/fototarde.png';
        window.document.body.style.backgroundColor = '#f35044';
    } else {
        window.document.title = 'Boa noite!'
        msg.innerHTML = `<p><strong>Boa noite!</strong> Agora são ${hora} horas.</p>`;
        foto.src = './images/fotonoite.png';
        window.document.body.style.backgroundColor = '#4e788a';
    }
}