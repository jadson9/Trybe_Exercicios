function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  let ulPai = document.querySelector('#days')
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let diasSemana = document.createElement('li')
    diasSemana.className = 'day'
    if (dia === 24 || dia === 31){
      diasSemana.className = 'day holiday'
    } else if(dia === 4 || dia === 11 || dia === 18) {
      diasSemana.className = 'day friday'
    } else if (dia === 25 ){
      diasSemana.className = 'day friday holiday'
    }
    diasSemana.innerHTML = dia
    ulPai.appendChild(diasSemana)

  }

  let botaoPai = document.querySelector('.buttons-container')
  let botao = document.createElement('button')
  botao.innerText = 'Feriados'
  botao.id = "btn-holiday"
  botaoPai.appendChild(botao)

  let interruptor = 0;
  botao.addEventListener("click", mudaCor )
  function mudaCor(){
    let dias = document.getElementsByClassName('holiday')
    if (interruptor === 0) {
      for (let i = 0; i < dias.length; i += 1) {
          dias[i].style.backgroundColor = 'white' 
          interruptor = 1
      }
    } else if (interruptor === 1) {
      for (let i = 0; i < dias.length; i += 1) {
          dias[i].style.backgroundColor = 'rgb(238,238,238)' 
          interruptor = 0
      }
    }
    
  }

  let botao2Pai = document.querySelector('.buttons-container')
  let botao2 = document.createElement('button')
  botao2.innerText = 'Sexta-Feira'
  botao2.id = "btn-friday"
  botao2Pai.appendChild(botao2)

  botao2.addEventListener("click", mudaNome )
  let interruptor2 = 0;
  let listAux = [];
  function mudaNome(){
    let dias2 = document.getElementsByClassName('friday')
    if (interruptor2 == 0) {
      for (let i = 0; i < dias2.length; i += 1) {
        listAux.push(dias2[i].innerText)
        dias2[i].innerText = '#Sexteouu!' 
        interruptor2 = 1
      }
    } else if (interruptor2 == 1) {
      for (let i = 0; i < dias2.length; i += 1) {
        dias2[i].innerText = listAux[i]
        interruptor2 = 0
      }
    }
  }

  // Escreva seu código abaixo.