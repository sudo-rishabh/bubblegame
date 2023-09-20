var timer = 6;
var score = 0;
var hitrn = 0;
//jispe click kroge wo eliment par event raise hoga aur evnet listener na
 //milne par event elemnt k parent par listen dhundega whha v na milne
 // pr parent k parent par listener dhundega   


function increaseScore(){
    score +=  10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
    var clutter = "";

for(var i = 1; i<=168; i++ ){
     var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
   var timerint =  setInterval(function(){
        if(timer>0){
 
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over!</h1>`;
        }
        
    },1000);
}
document.querySelector("#pbtm")
.addEventListener("click",function(details){
var clicknum= (Number(details.target.textContent));
if(clicknum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}

})


runTimer();
makeBubble();  
getNewHit();  
increaseScore();