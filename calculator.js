console.log("JavaScript is working:)");
let calculator = document.getElementById("calc");
let display = document.getElementById("display");
let operator;
display.value = 0;

calculator.addEventListener("click", function (event){
    console.log(event);
    let id = event.target.id;
    if(id === "=") {
        display.value = eval(display.value)
    if(display.value===undefined){
        display.InnerHHTML = "error";
    }
    } else if (id==="b"){
        display.value = display.value.slice(0,-1);
        console.log(display.value.slice(0,-1))
    } else {
        display.value += id;
    }
    if(id==="c"){
        display.value = 0;
    }

});
