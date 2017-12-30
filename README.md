# A Typing Speed Test Project

Based on tutorial taken from Lynda.com [Javascript Essential Training](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3ajavascript+essential+training%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2) by [Morten Rand-Hendriksen](https://www.lynda.com/Morten-Rand-Hendriksen/725535-1.html)

This typing speed test will need to do a couple of things:

1. Detect the very first keystroke to start the timer.
2. Match the string of text entered with the string of text set to copy.

The timer should stop when the text matches exactly, and reset to take the test again.

## Functionality

#### Keypress event listener
To detect the very first keypress and start the timer function (function start()).


#### Keyup event listener
To constantly monitor keys being hit. Triggers spellcheck function to give visual feedback changing the border colour if a mistake is made, or if the task is complete (function spellCheck()).


#### Click event listener
To detect when the reset button has been clicked and trigger the reset function (function reset()).



### Timer

See MDN Docs [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

A conditional statement starts a new interval () which will repeatedly call a function with a fixed time delay between each call, which will be to run the timer.

setInterval() first argument is the function to execute, second argument is the number of **milliseconds** so for example 1000 would execute a function every second. Here we are triggering the runTimer function every one hundredth of a second:
`setInterval(runTimer, 10);`

The timer counts up from zero, counting up to 100 in the hundredths, up to 60 in the seconds and up to 60 in the minutes (00:00:00).
