console.clear();

let nomes = ['Rafaela', "Davi", 'Jailza', 'Rafael'];

console.log(nomes);

nomes.forEach(nome => {
    console.log(nome);
});

console.log(nomes.length);

(() => {
    console.log('Teste de função')
})();

// let nomes_removidos = nomes.splice(2, 1);

// console.log('Primeiro array:', nomes, 'Segundo array:', nomes_removidos);

console.log(delete nomes[3]);

nomes.forEach(nome => {
    console.log(nome);
});