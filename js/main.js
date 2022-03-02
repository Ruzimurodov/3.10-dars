var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult = document.querySelector(".form__span");
var toq = [];
var juft = [];



elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elInputVal = Number(elInput.value.trim());

    if(elInputVal % 2 == 0){
        juft.unshift(elInputVal);
        elResult.textContent = "Juft";
        console.log(juft + " soni juft");
    }else{
        toq.unshift(elInputVal)
        elResult.textContent = "Toq";
        console.log(toq + " soni toq");
    }
    
    elInput.value = ""
})

























