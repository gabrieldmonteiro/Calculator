function insert(num){
    var exp = document.getElementById("input");
    exp.value+=num; 
}

function clearExp(){
    var exp = document.getElementById("input");
    exp.value = "";    
}

function back(){
    var exp = document.getElementById("input");
    console.log(exp.value);
    exp.value = exp.substring(0,exp.length-1);
    console.log(exp.value);
}

function answer(){
var exp = document.getElementById("input");
exp.value = eval(exp.value);
}