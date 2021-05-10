var personagem = document.getElementById("personagem");
var bloco = document.getElementById("bloco");

function jump(){
    if(personagem.classList != "animate")
    personagem.classList.add("animate")
    setTimeout(function(){
        personagem.classList.remove("animate");
    }, 400);
}
var limite = setInterval(function(){
    var alto =
    parseInt(window.getComputedStyle(personagem).
    getPropertyValue("top"));
   
},10);