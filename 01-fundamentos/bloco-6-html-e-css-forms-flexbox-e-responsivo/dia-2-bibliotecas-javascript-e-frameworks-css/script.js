const botaoEnviar = document.querySelector('#submit')

function removeInformacoes() {
  
}

function retiraComportamento(event) {
  event.preventDefault()
}

botaoEnviar.addEventListener('click', retiraComportamento)


const divImage = document.querySelector('.image')
const checkBox = document.querySelector('#contrato')
checkBox.addEventListener('click', campoImage)
function campoImage() {
  if (checkBox.checked) {
    let paragrafo = document.createElement('p')
    paragrafo.className = 'paragrafo'
    paragrafo.innerText = 'Envie uma imagem'
    let imagem = document.createElement('input')
    imagem.type = 'file'
    imagem.name = 'imagem'
    imagem.id = 'image-upload'
    divImage.appendChild(paragrafo)
    divImage.appendChild(imagem)
    localStorage.statusCheck
  } else {
    divImage.removeChild(document.querySelector('#image-upload'))
    divImage.removeChild(document.querySelector('.paragrafo'))
  }
}
