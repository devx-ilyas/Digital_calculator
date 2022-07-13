let result = document.getElementById("res");
let calculate =(number)=>{
    result.value += number;

}

let resuult = ()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("invalid operation");
    }
}

function clr(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0,-1);
}