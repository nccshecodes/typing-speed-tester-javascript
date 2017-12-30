const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]; // minutes, seconds, hundredths of seconds, thousands of seconds

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
  console.log(textEntered);
}

// Start the timer:
function start() {
  // make sure detecting very first keypress, detect how much content currently sits inside box
  // timer only starts when content length is zero ie. empty.
  let textEnteredLength = testArea.value.length
  if (textEnteredLength === 0) {
    // first arg which function to call, second arg time delay between each call
    // 10 = one hundredth of a second (1000 is every second)
    setInterval(runTimer, 10);
  }
}

// Reset everything:
function reset() {
  console.log("reset button has been presssed.")
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
