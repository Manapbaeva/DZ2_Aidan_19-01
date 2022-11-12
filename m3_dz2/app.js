//Task 1
const block = document.querySelector(".block");
const greeting = moveIng =>
    setTimeout(() => {
        console.log(' ' +  moveIng);
        greeting( moveIng + 1);
    },  moveIng * 1000);
greeting(1);

let position = 0;
let topPosition = 0;

const act = ()=> {
    if(position <= 447 && topPosition <= 0){
        position+=15
        block.style.left = `${position}px` ;
        setTimeout(act, 100);
    }else if(position>=447 && topPosition <= 450){
        topPosition+=15
        block.style.top = `${topPosition}px` ;
        setTimeout(act, 100);
    }else if(position >=15 && topPosition  >= 450 ){
        position-=15
        block.style.left = `${position}px` ;
        setTimeout(act, 100);
    }else if(position <= 15 && topPosition >= 0){
        topPosition-=15
        block.style.top = `${topPosition}px` ;
        setTimeout(act, 100);
    }
};
act();


//Task2
let i = 0;
stopIt = setInterval(
    function(){
        i = i + 1;
        console.log(+ i + " sec");
        if (i > 59){
            clearInterval(stopIt)
        }
    },1000);
