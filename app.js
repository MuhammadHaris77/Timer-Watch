var minute = prompt("enter Minutes?", 010);
var second = prompt("enter Seconds?", 010);
// var minute = 0;
// var second = 5;
var milisecond = 99;

var min = document.getElementById("displayminute");
var sec = document.getElementById("displaysecond");
var milisec = document.getElementById("displaymilisecond");

function timerWatch() {
  milisecond--;
  if (milisecond == 0) {
    second--;
  }
  if (milisecond == 0) {
    milisecond = 99;
  }
  if (second == 0) {
    minute--;
    second = 59;
  }

  if (minute == -1) {
    reset();
    alert("Time Up!");
  }

  milisec.innerHTML = zeroFormat(milisecond);
  sec.innerHTML = zeroFormat(second);
  min.innerHTML = zeroFormat(minute);
}

var interval;

function startWatch() {
  interval = setInterval(timerWatch, 10);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  pause();
  milisecond = 0;
  second = 0;
  minute = 0;

  displayminute.innerHTML = minute;
  displaysecond.innerHTML = second;
  displaymilisecond.innerHTML = milisecond;
}

function zeroFormat(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
