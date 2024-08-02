let input = document.getElementById("playerName");
let submit = document.getElementById("submitting");
let displayArea = document.querySelector(".yourName");
let imgSrc1 = document.querySelector(".output1");
let imgSrc2 = document.querySelector(".output2");

submit.addEventListener("click",function (){
   let inputValue = input.value;
   displayArea.innerHTML = inputValue;
   document.querySelector(".overlay").style.display="none";
   document.body.style.overflowY = "scroll";
})


let symbolArr = ["Rock", "Paper", "Scissor"];

let button = document.querySelectorAll(".button1");
let winner = document.querySelector(".winnerBox");


for (let i = 0; i < button.length; i++){
   button[i].addEventListener("click", function (){
      let user1Names = input.value;
      let ranNo = Math.floor(Math.random()*3)+1;
      let pic = "pic"+ranNo+".jpg";

      let symbol = symbolArr[ranNo-1];
      let symbolPlace1 = document.querySelector(".symbolName1");
      let symbolPlace2 = document.querySelector(".symbolName2");

      let buttonValue = document.querySelectorAll(".button2")[ranNo-1]


      switch (i+1){
         case 1:
            symbolPlace1.innerHTML = symbolArr[i];
            imgSrc1.setAttribute("src","Images/pic1.jpg");
            buttonValue.style.opacity = "0.8";

            setTimeout(function(){
               buttonValue.style.opacity = "1";
            },150);

            symbolPlace2.innerHTML = symbol;
            imgSrc2.setAttribute("src",`Images/${pic}`);
            if (ranNo == 2){
                  winner.innerHTML = " Player 2 Wins the Match";
            }else if (ranNo == 3){
                  winner.innerHTML = ` ${user1Names} Wins the Match`;
            }else {
                  winner.innerHTML = " Match Draw..";
            }
            break;
         case 2:
            symbolPlace1.innerHTML = symbolArr[i];
            imgSrc1.setAttribute("src","Images/pic2.jpg"); 
            buttonValue.style.opacity = "0.8";

            setTimeout(function(){
               buttonValue.style.opacity = "1";
            },100);

            symbolPlace2.innerHTML = symbol;
            imgSrc2.setAttribute("src",`Images/${pic}`);
            if (ranNo == 2){
                  winner.innerHTML = " Match Draw..";
            }else if (ranNo == 3){
                  winner.innerHTML = " Player 2 Wins the Match";
            }else {
                  winner.innerHTML = ` ${user1Names} Wins the Match`;
            }
            break;
         case 3:
            symbolPlace1.innerHTML = symbolArr[i];
            imgSrc1.setAttribute("src","Images/pic3.jpg");
            buttonValue.style.opacity = "0.8";

            setTimeout(function(){
               buttonValue.style.opacity = "1";
            },100);
            symbolPlace2.innerHTML = symbol;
            imgSrc2.setAttribute("src",`Images/${pic}`);
            if (ranNo == 2){
                  winner.innerHTML = ` ${user1Names} Wins the Match`;
            }else if (ranNo == 3){
                  winner.innerHTML = " Match Draw..";
            }else {
                  winner.innerHTML = " Player 2 Wins the Match";
            }
            break;
      }
   })
}