let personagem = document.getElementById("personagem");
let bloco = document.getElementById("bloco");
let fundo = document.getElementById("fundo");

function jump(){
    if(personagem.classList != "animate")
    personagem.classList.add("animate")
    setTimeout(function(){
        personagem.classList.remove("animate");
    }, 620);
}
let gameOver= setInterval(function(){
    let personagemTop =
    parseInt(window.getComputedStyle(personagem).
    getPropertyValue("top"));
    let blocoLeft = 
    parseInt(window.getComputedStyle(bloco).
    getPropertyValue("left"));
    if(blocoLeft <130 && blocoLeft >0 &&
    personagemTop>=180){
        bloco.style.display ="none";
        alert("VOCÊ FOI CORONGADA, ATUALIZE A PÁGINA E PRESSIONE 'OK' PRA CHEGAR NO POSTO DE VACINAÇÃO MAIS PRÓXIMO")
    }
    
   
},10);
