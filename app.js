let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("key was click");
        started = true;

        levelUp();
    }    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250)
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);

    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userseq[idx] == gameSeq[idx]){
        if(userseq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.background = "red";
        setTimeout(function() {
            document.querySelector("body").style.background = "white";
        }, 200)

        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}