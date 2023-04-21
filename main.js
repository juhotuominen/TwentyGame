
const button = document.getElementById("button");
button.addEventListener("click", randomize);
const setButton = document.getElementById("setButton");
setButton.addEventListener("click", setNumber);


function randomize(){
    const number = Math.floor(Math.random() * 1000);
    document.getElementById('randomnumber').innerHTML = number;
    
}

function setNumber(){
    var number = document.getElementById('randomnumber').innerHTML;
    var location = document.getElementById("location").value;
    console.log(location, number);
    document.getElementById('box' + location).innerHTML = number;
    document.getElementById("box" + location).className = "set";
}



