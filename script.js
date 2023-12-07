console.log('Welcome toTic Tac Toe');
let music=new Audio('chiptune-grooving-142242.mp3');
let audioTurn=new Audio("ui_correct_button2-103167.mp3");
let gameover=new Audio("mixkit-fairytale-game-over-1945.wav");
let turn="X";
 let isgameover=false;


//function to chng turn
const changeTurn=()=>{
    return turn =="X"?"0":"X";
}
//function to check win
function checkWin(){
   let boxtext=document.getElementsByClassName('boxtext');
   let wins=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
   ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
        isgameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='170px';
    }
  })
}

//Game logic
music.play();
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',e=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
        }
    })

})

reset.addEventListener('click',()=>{
     let boxtext=document.querySelectorAll('.boxtext');
     Array.from(boxtext).forEach(element=>{
        element.innerText="";
     });
     turn="X";
     isgameover = false;
     document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
})






