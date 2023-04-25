
const setButton = document.getElementById("setButton");
setButton.addEventListener("click", setNumber);


function randomize(){
    const number = Math.floor(Math.random() * 1000);
    document.getElementById('randomnumber').innerHTML = number;
}

function setNumber(){
    const playedNumbers = [];
    var number = document.getElementById('randomnumber').innerHTML;
    var location = document.getElementById("location").value;
    document.getElementById('box' + location).innerHTML = number;
    document.getElementById("box" + location).className = "set";
    playedNumbers[location] = number;
    console.log(playedNumbers[location]);
    randomize();
}


  


