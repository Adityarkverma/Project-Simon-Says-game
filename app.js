let gs = [];
let us = [];
let score = [];
let btns = ['yellow','green','red','blue'];
let start = false;
let level =0;
let h =-1;
let h2 =  document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(start ==  false){
        start =  true;
        levelup();
    }
    
});

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>{
        btn.classList.remove('userflash');
    },200)
}

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },200)
}

function levelup(){
    us =[];
    level++;
    h2.innerText = `Level ${level}`;

    let rdidx = Math.floor(Math.random()*3);
    let rdclr = btns[rdidx];
    gs.push(rdclr);
    let rdbtn = document.querySelector(`.${rdclr}`);
    btnflash(rdbtn);
}

function checkbtn(idx){
    if(us[idx]==gs[idx]){
        if(us.length==gs.length){
            setTimeout(levelup,1000);
        }
    }else{
        score.push(level);
        for(hs of score){
            if(hs>h){
                h=hs;
            }
        }
        h2.innerHTML = `Game Over! <br> Your Score was <b>${level}</b> <br> <u> <b>High Score : ${h}</u> </b> <br> Press any key to start`;

        document.querySelector("body").style.backgroundColor
        ='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='black';
        },200)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);
    usclr = btn.getAttribute('id');
    us.push(usclr);
    checkbtn(us.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    start=false;
    gs=[];
    us=[];
    level=0;
}