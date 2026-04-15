document.addEventListener("DOMContentLoaded", function () {

  let noBtn = document.getElementById("no");

  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");

  let audio = document.getElementById("bg-music");

  function trocarTela(atual, proxima) {
    atual.style.display = "none";
    proxima.style.display = "block";
  }

  // botão SIM
  document.getElementById("yes").addEventListener("click", function () {
    trocarTela(q1, q2);
  });

  // botão NÃO foge
  noBtn.addEventListener("mouseover", function () {
    let x = Math.random() * 250 - 125;
    let y = Math.random() * 250 - 125;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // escolha da data
  document.querySelectorAll(".date").forEach(function (btn) {
    btn.addEventListener("click", function () {
      trocarTela(q2, q3);
      audio.play();
    });
  });

});
