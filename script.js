const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area"); // user entered text
const originText = document.querySelector("#origin-text p").innerHTML; // test text to match
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]; // minutes, seconds, hundredths of seconds, thousands of seconds
var interval; //declare interval as global variable so that setInterval function can be assigned to it and then effectively stopped when test is complete.
var timerRunning = false; // used to make sure timer doesn't start again when text is cleared.

// Add leading zero to numbers 9 or below (purely for aesthetics):
// helper function
function leadingZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
  // sets timer to zero, on minutes, seconds, hundredths values from timer array
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  // increment timer hundredths of a second value (last value of timer array)
  // which happens every one hundredth of a second (setInterval(runTimer, 10))
  timer[3] ++;
  // define minutes
  timer[0] = Math.floor((timer[3]/100)/60); //1st calc converts to seconds, 2nd calc coverts seconds to minutes.
  // define seconds
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  //define hundreths of a seconds
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = testArea.value;
  // substring 1st argument is where in array we want to start, 2nd argument is how many characters to return.
  let originTextMatch = originText.substring(0, textEntered.length);
  if (textEntered == originText) {
    // stop the timer
    clearInterval(interval);
    testWrapper.style.borderColor = "#429890"; // green
  } else {
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "#65CCF3"; // blue
    } else {
      testWrapper.style.borderColor = "#E95D0F"; // orange
    }
  }
}

// Start the timer:
function start() {
  // make sure detecting very first keypress, detect how much content currently sits inside box
  // timer only starts when content length is zero ie. empty.
  let textEnteredLength = testArea.value.length
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true; // stops setInterval running again if text is cleared.
    // first arg which function to call, second arg time delay between each call
    // 10 = one hundredth of a second (1000 is every second)
    interval = setInterval(runTimer, 10);
  }
}

// Reset everything:
function reset() {
  clearInterval(interval);
  interval = null; // so that when reassigned setInterval() it doesnt set up a new interval with a new index number to save resources.
  timer = [0,0,0,0];
  timerRunning = false;
  testArea.value = "";
  testWrapper.style.borderColor = "grey";
  theTimer.innerHTML = "00:00:00";
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
