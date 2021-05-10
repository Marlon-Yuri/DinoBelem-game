var personagem = document.getElementById("personagem");
var bloco = document.getElementById("bloco");

function jump(){
    personagem.classList.add("jump-animate")
    setTimeout(function(){
        personagem.classList.remove("jump-animate");
    }, 500);
}