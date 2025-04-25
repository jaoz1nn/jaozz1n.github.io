let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * height + "px";
this.style.left = Math.random() * width + "px";
});

document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");
  let audio = document.getElementById("bg-music");

  card.style.backgroundImage =
    "url('https://i.pinimg.com/originals/4f/88/58/4f8858d8bfa544a094fd5efca0b71985.gif')";
  question.style.display = "none";
  message.style.display = "flex";

  audio.play();
});
