
const setButton = document.getElementById("setButton");
setButton.addEventListener("click", setNumber);
const playedNumbers = [];



function setNumber() {
  var number = document.getElementById("randomnumber").innerHTML;
  var loc = document.getElementById("location").value;
  var box = document.getElementById("box" + loc);

  if (checkArray(playedNumbers, loc)) {
    playedNumbers[loc] = number;
    box.innerHTML = number;
    box.className = "set";
    if (arrayInIncreasingOrder(playedNumbers)) {
      randomize();
    } else {
      document.getElementById("randomnumber").innerHTML = "Lost";
      box.className = "lost";
    }
  } else {
    alert("Location is already taken. Please choose another.");
    document.getElementById("location").value = "";
  
  }
}

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

function checkArray(playedNumbers, location){
  if (playedNumbers[location] === undefined){
    return true;
    
  }
  else if(playedNumbers[location] !== undefined){
    return false;
  }
}