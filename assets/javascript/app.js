// Trivia GAME Logic
// =============================



// Window Load logic
window.onload = function () {
  $("#quiz").hide();
  $("#results").hide();
  $("#startBtn").on("click", timer.start);
  $("#stopBtn").on("click", timer.stop);
  $("#doneBtn").on("click", function () {
    timer.stop;
  });
}





//  Variable that will hold our setInterval that runs the timer
var intervalId;


var i = 30;
//Set counts to be displayed on the page for correct, incorrect and unanswered 
var countCorrect = 0;
var countIncorrect = 0;
var countNotAnswered = 0;
var remainingTime;


// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our timer object
var timer = {

  time: 30,
  // reset: function () {

  //   timer.time = 30;

  //   //Change the "display" div to "00:30."
  //   $("#display").text("00:30");

  // },
  start: function () {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      countCorrect = 0;
      countIncorrect = 0;
      countNotAnswered = 0;
      timer.time = 30;
      console.log("clock running");
      $("#quiz").show();
      $("#results").hide();
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function () {
    console.log("in timer.stop");

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    console.log("in stop function");
    clockRunning = false;
    remainingTime = timer.timeConverter(timer.time);
    console.log("remaining time: " + remainingTime);
    // Calculate correct, incorrect, and unanswered questions and display
    CalculateWins();
    displayCounts();
  },

  count: function () {

    // decrement time by 1, remember we cant use "this" here.
    console.log("in count function timer is : " + timer.time);
    timer.time--;

    // Get the current time, pass that into the timer.timeConverter function,
    // and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);

    if (timer.time <= 0) {
      timer.stop;
    }
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

$("#doneBtn").on("click", timer.stop);

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
  var questionAnswered = false;
  for (var i = 0; i < radios.length; i++) {

    // find the checked radio button 
    if (radios[i].checked) {
      questionAnswered = true;
      answerValue = radios[i].value;

      console.log("in Calculate Wins :" + radios[i].value);

      // if the selected radio button value is correct, add to countWins
      if (radios[i].value === correctAnswer) {
        countCorrect++;
        console.log("countCorrect: " + countCorrect);
      }

      else {
        // otherwise add to countLosses
        countIncorrect++;
        console.log("countIncorrect: " + countIncorrect);
      }

    }
  }
  //If no anwer was selected for this question, updated unanswered count
  if (!questionAnswered) {
    countNotAnswered++;
    console.log("notAnswered: " + countNotAnswered);
  }

}

function displayCounts() {
  //Hide the Quiz form that that shows the questions and answers
  $("#quiz").hide();

  // Update the Correct, incorrect and unanswered  counts and show
  $("#correct").text("Correct Answers: " + countCorrect);
  $("#incorrect").text("Incorrect Answers: " + countIncorrect);
  $("#unanswered").text("Unanswered: " + countNotAnswered);
  $("#remainingTime").text("Remaining time: " + remainingTime);

  $("#results").show();

}

