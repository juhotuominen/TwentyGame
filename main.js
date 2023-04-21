
const button = document.getElementById("button");
button.addEventListener("click", randomize);
const div = document.getElementById("box");
div.addEventListener("click", setNumber);

function randomize(){
    const number = Math.floor(Math.random() * 1000);
    document.getElementById('randomnumber').innerHTML = number;
    
}

function setNumber(){
    var number = document.getElementById('randomnumber').innerHTML;
    console.log(number);
    document.getElementById('box').innerHTML = number;
}


