// Trivia GAME Logic
// =============================



//Seem's like the window.onload is not working.. Added this code
window.onload = function () {
  $("#quiz").hide();
}

$("#startBtn").on("click", function () {
  console.log("startBtn click");
  $("#quiz").show();
  startTimer();

  // displayQuestions();
});
$("#stopBtn").on("click", function () {
  stopTimer();
});


//  Variable that will hold our setInterval that runs the timer
var intervalId;


var i = 30;
//Set countWins.
var countWins = 0;
var countLosses = 0;

function startTimer() {

  console.log("startTimer function");

  var countdownTimer = setInterval(function () {

    console.log(i);
    i = i - 1;


    if (i <= 0) {
      clearInterval(countdownTimer);
      CalculateWins();
      return;
    }
    else {
      /* #display ??? follow stopwatch code?*/
      timer.start();
    }

  }, 1000);

}


// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our timer object
var timer = {

  time: 30,
  reset: function () {

    timer.time = 30;

    // DONE: Change the "display" div to "00:30."
    $("#display").text("00:30");

  },
  start: function () {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      console.log("clock running");
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function () {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    console.log("in stop function");
    clockRunning = false;

  },

  count: function () {

    // DONE: deincrement time by 1, remember we cant use "this" here.
    timer.time--;
    if (timer.time < 0) {

      return
    }

    // DONE: Get the current time, pass that into the timer.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function (t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

function CalculateWins() {
  console.log("CalculateWins");
  var correctAnswer = "";

  //Load the array radios with all question1 answers

  var radios = document.getElementsByName('question1');
  console.log(radios);
  correctAnswer = "homophones";
  // Call checkRadioBtn passing question 1 radio button answers and the correct answer
  checkRadioBtn(radios, correctAnswer);


  //Load the array radios with all question2 answers

  var radios = document.getElementsByName('question2');
  console.log(radios);
  correctAnswer = "silver";
  //Call checkRadioBtn passing question 2 radio button answers and the correct answer
  checkRadioBtn(radios, correctAnswer);


  //Load the array radios with all question3 answers

  var radios = document.getElementsByName('question3');
  console.log(radios);
  correctAnswer = "up";
  //Call checkRadioBtn passing question 3 radio button answers and the correct answer
  checkRadioBtn(radios, correctAnswer);

  //Load the array radios with all question4 answers

  var radios = document.getElementsByName('question4');
  console.log(radios);
  correctAnswer = "england";
  //Call checkRadioBtn passing question 4 radio button answers and the correct answer
  checkRadioBtn(radios, correctAnswer);

  //Load the array radios with all question5 answers

  var radios = document.getElementsByName('question5');
  console.log(radios);
  correctAnswer = "chlorophyl";
  //Call checkRadioBtn passing question 5 radio button answers and the correct answer
  checkRadioBtn(radios, correctAnswer);

};

function checkRadioBtn(radios, correctAnswer) {
  // Loop through all question  answers looking for the checked item
  // Check if the value of the selected item is the correct or incorrect answer and add to counts
  for (var i = 0; i < radios.length; i++) {

    // find the checked radio button 
    if (radios[i].checked) {
      var answerValue = radios[i].value;

      console.log("in Calculate Wins :" + radios[i].value);

      // if the selected radio button value is correct, add to countWins
      if (radios[i].value === correctAnswer) {
        countWins++;
        console.log("countWins: " + countWins);
      }

      else {
        // otherwise add to countLosses
        countLosses++;
        console.log("countLosses: " + countLosses);
      }

    }
  }

}

