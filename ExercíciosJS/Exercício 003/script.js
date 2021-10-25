function calcular() {
    let contador = 1
    let resultado = 0
    
    document.querySelector('div.resultado').innerHTML = '';
    while (contador <= 10) {
        resultado = contador * Number(document.querySelector('select#tabuada').options[document.querySelector('select#tabuada').selectedIndex].value);
        document.querySelector('div.resultado').innerHTML += `<p class="texto">${document.querySelector('select.selecao').options[document.querySelector('select.selecao').selectedIndex].text} ${contador} = ${resultado}</p>`;
        contador ++
    }
}
/*
function calcular() {
    alert(document.querySelector('select.selecao').options[document.querySelector('select.selecao').selectedIndex].value)
}
*/