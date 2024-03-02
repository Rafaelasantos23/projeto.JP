

const result = document.querySelector('p')


const pontuaçãoDaMaquina = document.querySelector('#suap')
const minhaPontuação = document.querySelector('#minhap')


let humanNamber = 0
let  machineNamber = 0

let imagem = document.querySelector('.img')

const playHuman = (humanchoice) => {


    playTheGame(humanchoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const radomNamber = Math.floor(Math.random() * 3)



    return choice[radomNamber]
}


const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Impatou!!'
        imagem.src = "./assets/f4.png"
    }

    else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        result.innerHTML = 'Você ganhou!!'
        humanNamber++
        minhaPontuação.innerHTML = humanNamber
        imagem.src ="./assets/1f60e.png"        
    }
    else {result.innerHTML = 'A maquina ganhou '
        machineNamber++
        pontuaçãoDaMaquina.innerHTML = machineNamber
        imagem.src="./assets/2f.png"
}
} 