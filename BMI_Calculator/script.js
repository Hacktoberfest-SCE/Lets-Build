//age
let age = document.getElementById("age").value;
let weight = document.getElementById("weight").value;


let ageDecrementor = document.getElementById("ageminus");
let ageIncrementor = document.getElementById("ageplus");

ageDecrementor.addEventListener("click",()=>{
    age--;
    document.getElementById("age").value = age;
})

ageIncrementor.addEventListener("click",()=>{
    age++;
    document.getElementById("age").value = age;
})

//weight
let weig = document.getElementById("weight").value;
let weightDecrementor = document.getElementById("weightminus");
let weightIncrementor = document.getElementById("weightplus");

weightDecrementor.addEventListener("click",()=>{
    weig--;
    document.getElementById("weight").value = weig;
})

weightIncrementor.addEventListener("click",()=>{
    weig++;
    document.getElementById("weight").value = weig;
})



function calculateBmi(){
    // document.getElementById("body").classList.add("black");
    let weight = document.getElementById("weight").value;
    let inches = document.getElementById("inches").value;
    let feet = document.getElementById("feet").value;
    let height = inches*0.0254 + feet*0.3048; //height in meters
    let ans = weight/(height*height);
    ans = ans.toFixed(2);
    document.getElementById("answer").innerHTML = "Your BMI IS " + ans;

    refresh();
}

function refresh(){
    setTimeout(function(){
        location.reload();
    }, 1400);
}