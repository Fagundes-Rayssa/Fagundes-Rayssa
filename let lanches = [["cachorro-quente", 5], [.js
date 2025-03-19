let lanches = [["cachorro-quente", 5], ["paçoca", 2], ["refregerante-suco", 4], ["Pastel", 8], ["pipoca", 5]];


function mostraCardapio() {
   console.log("Cardápio:");
   lanches.forEach((item, index) => {
       console.log(`${index + 1} - ${item[0]} R$ ${item[1]}`);
   });
}




function adicionaLanche(nome, preco) {
   lanches.push([nome, valor]);
   console.log(`${nome} foi adicionado ao cardápio com o valor de R$ ${valor}`);
}




function cardapioEspecial() {
   console.log("\nCardápio Especial para Clientes Fidelizados (15% de Desconto):");
   lanches.forEach((item, index) => {
       let precoDesconto = item[1] * 0.85;
       console.log(`${index + 1} - ${item[0]} R$ ${precoDesconto.toFixed(2)}`);
   });
}




console.log("Executando o Cardápio...");
mostraCardapio();
adicionaLanche("coxinha", 6);
mostraCardapio();
cardapioEspecial();
