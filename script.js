document.addEventListener("DOMContentLoaded", function () {

  let yes = document.getElementById("yes");
  let no = document.getElementById("no");

  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");

  let finalText = document.getElementById("final-text");
  let whatsappLink = document.getElementById("whatsapp-link");

  let audio = document.getElementById("bg-music");

  // SEU NÚMERO CORRETO
  let numero = "5511993849344";

  // botão SIM
  yes.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "block";
  });

  // botão NÃO foge
  no.addEventListener("mouseover", function () {
    let x = Math.random() * 200 - 100;
    let y = Math.random() * 200 - 100;
    no.style.transform = `translate(${x}px, ${y}px)`;
  });

  // escolha da data
  document.querySelectorAll(".date").forEach(function (btn) {
    btn.addEventListener("click", function () {

      let dia = this.innerText;

      q2.style.display = "none";
      q3.style.display = "block";

      finalText.innerHTML =
        `Então fechado 😄<br>
         Dia ${dia} combinado.<br>
         Me chama no Whats pra gente alinhar tudo 😉`;

      let mensagem = `Oi! Escolhi o dia ${dia} 😄`;
      let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      whatsappLink.href = link;

      audio.play();
    });
  });

});
