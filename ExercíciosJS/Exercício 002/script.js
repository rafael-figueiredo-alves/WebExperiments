function exibeTabuada() {
    let tabuada = document.querySelector('#teste').value;
    let contador = 0
    let Resultado = document.querySelector('div.Resultado')

    Resultado.innerHTML = ''

    alert(tabuada.length)
        
    if (tabuada.length > 0){
        tabuada = Number(tabuada)
        for (contador = 0; contador <= 10; contador++){
            let res = contador * tabuada
            Resultado.innerHTML += `<p>${tabuada} X ${contador} = <strong>${res}</strong></p>`           
        }
    }
}