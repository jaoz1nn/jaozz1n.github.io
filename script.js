document.addEventListener("DOMContentLoaded", function () {

  let yes = document.getElementById("yes");
  let no = document.getElementById("no");

  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");

  let audio = document.getElementById("bg-music");

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
      q2.style.display = "none";
      q3.style.display = "block";

      audio.play();
    });
  });

});
