const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");


const tempoObjetivo1 = new Date (2024,7,6,21,30)
const tempoObjetivo2 = new Date (2024,9,10,5,33)
const tempoObjetivo3 = new Date (2024,7,16,10,50)
const tempoObjetivo4 = new Date (2024,11,01,11,28)
function calculaTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dias
    
segundos = (tempoObjetivo-agora)/1000;
minutos = (segundos)/60;
horas = (minutos)/60;
dias = (horas)/24;

segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);

segundos = segundos%60
minutos = minutos%60
horas = horas%24
return[dias, horas, minutos, segundos]
}

/*let contadorPrimeiro = calculaTempo(tempoObjetivo1)
contador[0].textContent = `faltam ${contadorPrimeiro[0]} dias, ${contadorPrimeiro[1]} horas, ${contadorPrimeiro[2]} minutos, ${contadorPrimeiro[3]} segundos`
let contadorSegundo = calculaTempo(tempoObjetivo2)
contador[1].textContent = `faltam ${contadorSegundo[0]} dias, ${contadorSegundo[1]} horas, ${contadorSegundo[2]} minutos, ${contadorSegundo[3]} segundos`
let contadorTerceiro = calculaTempo(tempoObjetivo3)
contador[2].textContent = `faltam ${contadorTerceiro[0]} dias, ${contadorTerceiro[1]} horas, ${contadorTerceiro[2]} minutos, ${contadorTerceiro[3]} segundos`
let contadorQuarto = calculaTempo(tempoObjetivo4)
contador[3].textContent = `faltam ${contadorQuarto[0]} dias, ${contadorQuarto[1]} horas, ${contadorQuarto[2]} minutos, ${contadorQuarto[3]} segundos`
*/


for(let i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function(){
     for (let j = 0; j< botoes.length ; j++){
         botoes[j].classList.remove("ativo")
         conteudo[j].classList.remove("ativo")
     }   
     botoes[i].classList.add("ativo")
     conteudo[i].classList.add("ativo")
    }
}
