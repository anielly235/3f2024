const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");

contador[0].textContent = "Olá"
const tempoObjetivo1 = new Date(2029,11,20,23,59)
const tempoObjetivo2 = new Date(2025,11,30,23,59)
const tempoObjetivo3 = new Date(2026,11,31,23,59)
const tempoObjetivo4 = new Date(2030,11,23,23,59)

function calculaTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dias

    segundos = (tempoObjetivo - agora)/1000;
    minutos = segundos/60;
    horas = minutos/60;
    dias = horas/24;

    segundos = Math.floor(segundos);
    minutos = Math.floor(minutos);
    horas = Math.floor(horas);
    dias = Math.floor(dias);

    segundos = segundos%60;
    minutos = minutos%60;
    horas = horas%24;
    return [dias,horas,minutos,segundos]

}
let contadorPrimeiro = calculaTempo(tempoObjetivo1)
contador[0].textContent = `faltam ${contadorPrimeiro[0]} dias, ${contadorPrimeiro[1]} horas, ${contadorPrimeiro[2]} minutos,
let contadorSegundo = calculaTempo(tempoObjetivo2)
contador[1].textContent = `faltam ${contadorSegundo[0]} dias, ${contadorSegundo[1]} horas, ${contadorSegundo[2]} minutos, ${contadorSegundo[3]} segundos`
calculaTempo(tempoObjetivo1);
calculaTempo(tempoObjetivo2);
calculaTempo(tempoObjetivo3);
calculaTempo(tempoObjetivo4);



for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
        botoes[j].classList.remove("ativo");
        conteudo[j].classList.remove('ativo')
        }
        botoes[i].classList.add("ativo");
        conteudo[i].classList.add("ativo")
    }
}
