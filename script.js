document.addEventListener("DOMContentLoaded", function () {

let numero = "5511993849344";

let diaEscolhido = "";
let tipo = "";
let filme = "";

// telas
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");

function ir(atual, prox){
  atual.style.display = "none";
  prox.style.display = "block";
}

// SIM
document.getElementById("yes").onclick = () => ir(q1, q2);

// NÃO foge
document.getElementById("no").onmouseover = function(){
  this.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`
}

// ESCOLHA TIPO
document.getElementById("combo").onclick = () => {
  tipo = "Cinema + Restaurante";
  ir(q2, q3);
};

document.getElementById("resto").onclick = () => {
  tipo = "Só Restaurante";
  ir(q2, q3);
};

// DATA
document.querySelectorAll(".date").forEach(btn=>{
  btn.onclick = function(){
    diaEscolhido = this.innerText;

    if(tipo === "Cinema + Restaurante"){
      ir(q3, q4);
    } else {
      finalizar();
    }
  }
});

// FILME
document.querySelectorAll(".movie").forEach(el=>{
  el.onclick = function(){
    filme = this.dataset.filme;
    finalizar();
  }
});

// FINAL
function finalizar(){
  q3.style.display = "none";
  q4.style.display = "none";
  q5.style.display = "block";

  let texto = `Então fechado 😄<br>
  Dia ${diaEscolhido}<br>
  ${tipo}`;

  if(filme){
    texto += `<br>Filme: ${filme}`;
  }

  document.getElementById("final-text").innerHTML = texto;

  let msg = `Oi! Escolhi o dia ${diaEscolhido} - ${tipo} ${filme ? "e filme "+filme : ""} 😄`;

  document.getElementById("whatsapp-link").href =
    `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

});
