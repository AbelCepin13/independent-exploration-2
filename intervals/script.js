// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");


let interval=setInterval(updateCounter, 1000);

function updateCounter() {
    time = parseInt(time);
    time++;
    counterElement.innerHTML = time;
  }

