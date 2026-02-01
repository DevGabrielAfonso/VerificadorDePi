    var user_input = document.getElementById('user_input').value
    var resposta = document.getElementById('resposta')
    var resultado = document.getElementById('resultado')
    var titulo = document.getElementById("texto")
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var n = 0

    let pi = "";

async function carregarPi() {
    const resposta = await fetch('./data/pi.txt');
    pi = await resposta.text();
}

carregarPi();

function reset(){
    inicio = document.getElementById("inicio").value
    fim = document.getElementById("fim").value
}

const btn = document.getElementById("btnVerificar");
btn.addEventListener("click", verificar);

function verificar(){
    reset()
    var correto = 0
    var errado = 0
    resultado.innerHTML = ``
    resposta.innerHTML = ``
    user_input = document.getElementById('user_input').value
    var user_n = 0
    for (n=(inicio-1);n<fim;n++){
        if (user_input[user_n] === undefined){
        }
        else if (user_input[user_n] == Number(pi[n])){
            resposta.innerHTML += `<span style="color: green;"> ${pi[n]}</span`
            correto++
            user_n++
            //resposta.innerHTML = resposta.innerHTML.replace(pi[n], `<span style="color: green;">` + pi[n] + `</span>`) ;
        } else if (user_input[user_n] != Number(pi[n])) {
            resposta.innerHTML +=  ` ${user_input[user_n]}`
            errado++
            user_n++
        }
    }

    resultado.innerHTML += `</br>Você digitou ${user_input.length} dígitos!`
    resultado.innerHTML += `</br>${correto} corretos`
    resultado.innerHTML += ` e ${errado} errados!`
}