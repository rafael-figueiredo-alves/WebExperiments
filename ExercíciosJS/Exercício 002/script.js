function exibeTabuada() {
    let tabuada = document.querySelector('#teste').value;
    let contador = 0
    let Resultado = document.querySelector('div.Resultado')
        
    if (tabuada.length > 0){
        tabuada = Number(tabuada)
        Resultado.innerHTML = ''
        for (contador = 0; contador <= 10; contador++){
            let res = contador * tabuada
            Resultado.innerHTML += `<p>${tabuada} X ${contador} = <strong>${res}</strong></p>`           
        }
    } else {
        Resultado.innerHTML = '<p><strong>Não foi possível exibir a tabuada!</strong></p><p>Informe a tabuada que deseja exibir.</p>'
    }
}