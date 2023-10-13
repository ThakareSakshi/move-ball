let ball=document.getElementById("ball");

let left=0;
let topp=0;
let screen1=document.querySelector("body");
document.addEventListener('keydown',(e)=>{
    

    if(e.keyCode==37 || e.keyCode==65){
       if((left-20 )>=0){
        left-=20;
       }
        ball.style.left= left+"px";
        
        // console.log(ball.style.left,e.key);
    }
    else if(e.keyCode==38 || e.keyCode==65){
        
        console.log(topp-20);
       if((topp-20) >=0){
        topp-=20;
       }
        ball.style.top=topp+"px";

    }
    else if(e.keyCode==39 || e.keyCode==65){
        console.log(screen1.offsetWidth);
        if((left+20+50)< screen1.offsetWidth){
            left+=20;
        }
        ball.style.left=left+"px";
    }
    else if(e.keyCode==40 || e.keyCode==65){
       
        if((topp+20+50) < screen1.offsetHeight){
            topp+=20;
        }
        ball.style.top=topp+"px";
    }

    let goal=document.querySelector(".goal");
    if(elementsOverlap(ball, goal )){
        let msg=document.getElementById("msg");
        msg.style.display="block";
        topp=0;
        left=0;
    }
    else{
        let msg=document.getElementById("msg");
        msg.style.display="none";
    }

})



function elementsOverlap(el1, el2) {
    const ball = el1.getBoundingClientRect();
    const goal = el2.getBoundingClientRect();
  
    return (
     ball.top > goal.top &&
      ball.right < goal.right &&
      ball.bottom < goal.bottom &&
      ball.left> goal.left
    );
  }