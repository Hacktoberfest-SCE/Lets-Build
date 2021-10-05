let screenValue = "";
let screenval = document.getElementById('screen');
let back=document.getElementById('screen');
back.style.backgroundColor='rgb(10, 7, 7)';
var audio = new Audio('startupSound.mp3');
    audio.play();
function bn7(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner7').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn8(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner8').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn9(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner9').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bnd(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btnerd').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn4(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner4').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn5(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner5').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn6(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner6').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bnx(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btnerx').innerText;
    console.log(ButtonText);
    screenval.value+="*";
    screenValue=screenval.value;
}

function bn1(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner1').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn2(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner2').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn3(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner3').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bnmn(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btnermn').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bn0(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btner0').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bndot(){
    var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btnerdot').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bnpl(){
   var audio = new Audio('ironmanClick.mp3');
    audio.play();
    let ButtonText= document.getElementById('btnerplus').innerText;
    console.log(ButtonText);
    screenval.value+=ButtonText;
    screenValue=screenval.value;
}
function bneq(){
    var audio = new Audio('ironmanEqual.mp3');
    audio.play();
    let result= eval(screenValue);
    console.log(result);
    screenval.value=" ";
    screenval.value=eval(screenValue);
}
function bnC(){
    var audio = new Audio('ironmanEnd.mp3');
    audio.play();
    screenval.value="I LOVE YOU 3000";
    let back=document.getElementById('screen');
    back.style.backgroundColor='rgb(160, 5, 0)';
    setTimeout(function(){ screenval.value =""; back.style.backgroundColor='rgb(10, 7, 7)'; }, 1000);
}













