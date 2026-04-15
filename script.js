let noBtn = document.getElementById("no");

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let final = document.getElementById("final");

let audio = document.getElementById("bg-music");

// SIM
document.getElementById("yes").addEventListener("click", () => {
  q1.classList.add("hidden");
  q2.classList.remove("hidden");
});

// NÃO foge
noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * 250 - 125;
  let y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// escolha do dia
document.querySelectorAll(".date").forEach(btn => {
  btn.addEventListener("click", () => {
    q2.classList.add("hidden");
    final.classList.remove("hidden");

    audio.play();
  });
});
