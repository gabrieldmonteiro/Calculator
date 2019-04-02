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
    exp.value = exp.value.substring(0,exp.value.length-1);    
}

function answer(){
var exp = document.getElementById("input");
    if(exp.value){
    exp.value = eval(exp.value);
    }
}


