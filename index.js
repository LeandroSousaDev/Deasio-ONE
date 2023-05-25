const btnCodifica = document.querySelector('.btn1')
const btnDecodifica = document.querySelector('.btn2')

const input = document.querySelector('input')

const saida = document.querySelector('p')


btnCodifica.addEventListener('click', () => {

    let mensagem = input.value

    let paramentro = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    mensagem = mensagem.toLowerCase()

    for (let item of paramentro) {
        if (mensagem.includes(item[0])) {
            mensagem = mensagem.replaceAll(item[0], item[1])
        }
    }

    saida.textContent = mensagem

})


btnDecodifica.addEventListener('click', () => {

    let mensagem = input.value

    let paramentro = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    mensagem = mensagem.toLowerCase()

    for (let item of paramentro) {
        if (mensagem.includes(item[1])) {
            mensagem = mensagem.replaceAll(item[1], item[0])
        }
    }

    saida.textContent = mensagem

})