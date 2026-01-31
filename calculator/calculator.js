const display = document.querySelector(".display");

function AppendToDisplay(value){
    display.value += value;
}

function ClearAll(){
    display.value = "";
}

function BackSpace(){
    display.value = display.value.slice(0,-1);
}

function Calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}
