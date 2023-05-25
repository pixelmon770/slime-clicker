let slime = document.querySelector("#slime");

let game = document.querySelector(".main");

let r = document.querySelector(":root");

let speed = 1000;

game.addEventListener("click",()=>{
    slime.classList.remove("idle");
    slime.classList.add("attack");
    setTimeout(()=>{
        slime.classList.add("idle");
        slime.classList.remove("attack");
    },speed)
})