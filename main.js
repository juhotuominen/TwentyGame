
const setButton = document.getElementById("setButton");
setButton.addEventListener("click", setNumber);
const playedNumbers = [];

function randomize(){
    const number = Math.floor(Math.random() * 1000);
    document.getElementById('randomnumber').innerHTML = number;
}

function arrayInIncreasingOrder(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

function setNumber(){
    var number = document.getElementById('randomnumber').innerHTML;
    var location = document.getElementById("location").value;
    document.getElementById('box' + location).innerHTML = number;
    document.getElementById("box" + location).className = "set";
    playedNumbers[location] = number;
    console.log(playedNumbers);

    if (arrayInIncreasingOrder(playedNumbers)){
        randomize();
      } else {
        document.getElementById('randomnumber').innerHTML = "Lost";
      }
      
}


  


