var num1, num2, operator, answer, maxNum, timeLeft, timer, score, numQuestions, numCorrect;

function generateQuestion() {
  num1 = Math.floor(Math.random() * maxNum) + 1;
  num2 = Math.floor(Math.random() * maxNum) + 1;
  operator = 3;
  document.getElementById("question").innerHTML = num1 + " * " + num2;
  answer = num1 * num2;
  numQuestions++; // increment numQuestions
}

function startGame() {
  maxNum = 10;
  timeLeft = 60;
  score = 0;
  numQuestions = 0;
  numCorrect = 0;
  generateQuestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + "s";
  startTimer();
  document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
}

function checkAnswer() {
  var userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === answer) {
    score++;
    numCorrect++;
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect. The answer was " + answer + ".";
  }
  document.getElementById("answer").value = "";
  generateQuestion();
  document.getElementById("score").innerHTML = "Score: " + score;
}

function startTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + "s";
  if (timeLeft === 49) {
    endGame();
  } else {
    timer = setTimeout(startTimer, 1000);
  }
}

function endGame() {
  clearInterval(timer);
  document.getElementById("game-container").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("select").style.display = "none";
  var percentage = numCorrect/numQuestions * 100;
  var resultText = document.createElement("p");
  resultText.innerHTML = "Game Over! Your final score is " + score + " out of " + numQuestions + " (" + percentage.toFixed(2) + "%).";
  document.getElementById("result-container").appendChild(resultText);
  document.getElementById("start-btn").style.display = "block";
  var audio = new Audio('congratulations.mp3');
  audio.play();
}  

function setMaxNum(num) {
  maxNum = num;
  document.getElementById("maxNum-options").style.display = "none";
  startGame();
}

function showOptions() {
  document.getElementById("maxNum-options").style.display = "block";
}

function playVideo() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
  
  let count = 0;
  document.getElementById("title").addEventListener("click", function() {
    count++;
    if (count === 5) {
      appendFunction();
      count = 0;
    }
});
  
  function appendFunction() {
    playVideo();
}
