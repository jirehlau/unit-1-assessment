let clicks = 0


var count = document.getElementById("count");  
var minus = document.getElementById("minus");
var numberInput = document.getElementById("inputNumber");
var add = document.getElementById("add");

minus.addEventListener("click", function(event){
        if(clicks -= 1){
        count.innerHTML = clicks;
    }
    else {
        numberInput = "";
        clicks -= numberInput;
        count.innerHTML = clicks;
    }
})


add.addEventListener("click", function(event){
    if(clicks += 1){
    count.innerHTML = clicks;
    } 
    else {
        numberInput = "";
        clicks += numberInput;
        count.innerHTML = clicks;
    }
}) 

// numberInput.addEventListener("click", function(event){
//     if(clicks = randomnumber){
//         count.innerHTML = clicks;
//     }

// })