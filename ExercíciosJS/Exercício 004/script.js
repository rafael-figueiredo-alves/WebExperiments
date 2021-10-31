function iniciarContagem() {
    let inicio    = document.querySelector('input#ed_inicio').value;
    let fim       = document.querySelector('input#ed_fim').value;
    let padrao    = document.querySelector('input#ed_padrao').value;
    let msg       = document.querySelector('p.msg');
    let resultado = document.querySelector('p.Resultado');
    let contador  = 0

    msg.value = '<strong>Aguardando as informações para iniciar a contagem</strong>'
    resultado.innerHTML = ''

    if (inicio == '') {
        msg.innerHTML = '<strong>É necessário informar um inicio para começar a contar!</strong>'
        exit
    }

    inicio = Number(inicio)

    if (fim == '') {
        msg.innerHTML = '<strong>É necessário informar um término para começar a contar!</strong>'
        exit
    }

    fim = Number(fim)

    if (padrao == '') {
        msg.innerHTML = '<strong>É necessário informar um padrão de contagem para começar a contar!</strong>'
        exit
    }  

    if (padrao == 0) {
        msg.innerHTML = '<strong>Não é possível contar de zero em zero!</strong>'
        exit
    }

    padrao = Number(padrao)

    if (((inicio > fim) && (padrao > 0)) || ((inicio < fim) && (padrao < 0))) {
        msg.innerHTML = '<strong>Não foi possível contar porque o padrão não permite a contagem'
        exit
    }

    if (inicio > fim) {
        contador = inicio
        while (contador >= fim) {
            msg.innerHTML = '<strong>Segue a contagem</strong>'
            resultado.innerHTML += `${contador} 👉 `
            contador = contador + padrao
            if (contador < fim) {
             resultado.innerHTML += `🏴󠁧󠁢󠁷󠁬󠁳󠁿`
            } 
        }
    } else {
        contador = inicio
        while (contador <= fim) {
            msg.innerHTML = '<strong>Segue a contagem</strong>'
            resultado.innerHTML += `${contador} 👉 `
            contador = contador + padrao  
            if (contador > fim) {
                resultado.innerHTML += `🏴󠁧󠁢󠁷󠁬󠁳󠁿`
               }                       
        }
    }
}