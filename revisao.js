// 1)
const nome = "Rayssa Milena Correia Fagundes";
let numeroChamada = 23

// 2)
const jogos = ["FIFA 23", "Among Us", "Minecraft"];

// 3)
console.log("### exercicio 3 ###")
let i = 0;
console.log("Jogos favoritos de " + nome + " são:");
while (i < jogos.length) {
    console.log(jogos[i]);
    i++;
}
// 4)
const serieFavorito = {
    nome: nome, 
    nomeserie: "South Park",
    anoLancamento:1997 ,
    notaIMDb:8.7
};

//console.log(serieFavorito);

// 5) 
console.log("### exercicio5 ###")
if (serieFavorito.notaIMDb <= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
} else if (serieFavorito.notaIMDb > 4.0 && serieFavorito.notaIMDb <= 7.0) {
    console.log("O filme é considerado razoável.");
} else {
    console.log("O filme é muito bom!");
}

// 6)
console.log("### exercicio6 ###")
function verificaChuva(previsaoTempo) {
    console.log("Clima para essa semana:");
    for (let i = 0; i < previsaoTempo.length; i++) {
        const dia = previsaoTempo[i];
        if (dia.chanceChuva > 50) {
            console.log(`${dia.dia}: levar guarda-chuva`);
        } else {
            console.log(`${dia.dia}: tempo agradável`);
        }
    }
}
const previsaoTempo = [
    { dia: "Segunda", chanceChuva: 60 },
    { dia: "Terça", chanceChuva: 30 },
    { dia: "Quarta", chanceChuva: 80 },
    { dia: "Quinta", chanceChuva: 20 },
    { dia: "Sexta", chanceChuva: 50 }
];

verificaChuva(previsaoTempo);

