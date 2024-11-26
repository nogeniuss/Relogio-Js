// Função para obter a hora atual e atualizar o elemento HTML com a classe 'clock'
const getHours = () => {
    // Seleciona o elemento com a classe 'clock' do DOM
    const clock = document.getElementsByClassName('clock')[0];
  
    // Cria um novo objeto Date para obter a data e hora atuais
    const date = new Date();
  
    // Extrai as horas, minutos e segundos da data
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // Formata as horas, minutos e segundos para exibir dois dígitos
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
  
    // Atualiza o conteúdo HTML do elemento 'clock' com a hora formatada
    clock.innerHTML = `${hour}:${minute}:${second}`;
  };
  
  // Chama a função 'getHours' a cada 1 segundo para atualizar o relógio
  setInterval(() => {
    getHours();
  }, 1000);