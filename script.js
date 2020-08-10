//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var YellowScore = 0;
var GreenScore = 0;
var BlueScore = 0;
var PurpleScore = 0;

//grab result via DOM
var result = document.getElementById("result");
var resultImg = document.getElementById("result-img");

//#TODO: Use the DOM to create variables for the first quiz question.
//question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// //question 5
// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");
// var q5a3 = document.getElementById("q5a3");
// var q5a4 = document.getElementById("q5a4");

// //question 6
// var q6a1 = document.getElementById("q6a1");
// var q6a2 = document.getElementById("q6a2");
// var q6a3 = document.getElementById("q6a3");
// var q6a4 = document.getElementById("q6a4");

// //question 7
// var q7a1 = document.getElementById("q7a1");
// var q7a2 = document.getElementById("q7a2");
// var q7a3 = document.getElementById("q7a3");
// var q7a4 = document.getElementById("q7a4");

//#TODO: Add Event Listeners to your answer choice variables.

//question 1 order = 1,2,3,4
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

//question 2 swap 1 & 4
q2a1.addEventListener("click", result4);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result1);

//question 3 swap 2 & 3
q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result3);
q3a3.addEventListener("click", result2);
q3a4.addEventListener("click", result4);

//question 4 swap 1 & 2
q4a1.addEventListener("click", result2);
q4a2.addEventListener("click", result1);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

// //question 5 swap 3 & 4
// q5a1.addEventListener("click", result1);
// q5a2.addEventListener("click", result2);
// q5a3.addEventListener("click", result4);
// q5a4.addEventListener("click", result3);

// //question 6 swap 1 & 3
// q6a1.addEventListener("click", result3);
// q6a2.addEventListener("click", result2);
// q6a3.addEventListener("click", result1);
// q6a4.addEventListener("click", result4);

// //question 7 swap 2 & 4
// q7a1.addEventListener("click", result1);
// q7a2.addEventListener("click", result4);
// q7a3.addEventListener("click", result3);
// q7a4.addEventListener("click", result2);

//#TODO: Define quiz functions here
function result1() {
  // Yellow
  YellowScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
  // alert("one pt to Yellow");
}

function result2() {
  // Green
  GreenScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
  // alert("one pt to Green")
}

function result3() {
  // Blue
  BlueScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
  // alert("one pt to Blue")
}

function result4() {
  // Purple
  PurpleScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
  // alert("one pt to Purple")
}

function updateResult() {
  //Yellow Case
  if (YellowScore >= 3) {
    result.innerHTML =
      "Yellow: represents happiness and a love of learning. You probably have a deep need for logical order in your everyday life, and love to express your individuality by creating new ideas and sharing your collected knowledge with others.";
    resultImg.innerHTML =
      "<img src = 'https://cdn.glitch.com/6a3a3d98-5eb7-41ba-97d2-f7c35255fe9b%2Fcsfsessyello_420_824751534451985.jpg?v=1592511520098'>";
  }

  //Green Case
  else if (GreenScore >= 3) {
    result.innerHTML =
      "Green: you probably have a deep need to feel safe and secure, and a deep longing to love and be loved. You seek acknowledgment and acceptance for the everyday things you do, for you are typically down to earth and aware of what other people think of you. A good reputation is very important to you. Green often represents loyalty, being affectionate, and honesty";
    resultImg.innerHTML =
      "<img src = 'https://cdn.glitch.com/6a3a3d98-5eb7-41ba-97d2-f7c35255fe9b%2FEmerald_green_painted_swatch_Muntwyler-225-s.jpg?v=1594299789290'>";
  }

  //Blue Case
  else if (BlueScore >= 3) {
    result.innerHTML =
      "Blue: represents a deep need for personal inner peace and truth. You like to live your life according to your beliefs and ideals and choose to live in harmony and peace. Blue also represents your sensitive and reliable side, and a consistent effort to think of others. ";
    resultImg.innerHTML =
      "<img src = 'https://cdn.glitch.com/6a3a3d98-5eb7-41ba-97d2-f7c35255fe9b%2F1024px-Solid_blue.svg.png?v=1594299847428'>";
  }

  //Purple Case
  else if (PurpleScore >= 3) {
    result.innerHTML =
      "Purple: represents an artistic and unique individual, often very intuitive and interested deeply in spirituality. You are active and compassionate, paying attention to the finer details and constantly analyzing and observing everything that crosses your path. You are usually a good judge of character, and a visionary with a great need to participate in humanitarian problems. A little moody sometimes? Maybe, but thats only because you experience and feel everything so deeply.";
    resultImg.innerHTML =
      "<img src = 'https://cdn.glitch.com/6a3a3d98-5eb7-41ba-97d2-f7c35255fe9b%2F663399.png.png?v=1594299920570'>";
  } else {
    result.innerHTML =
      "Pink represents a loving, kind, soft, and sensitive individual, often with a nurturing and sensual side. Your romantic view of life brings you to have idealistic standards, with a sweet and charming side that often makes you a delicate and lovable individual. Pink represents a deep need to be accepted and loved unconditionally.";
    resultImg.innerHTML =
      "<img src = 'https://cdn.glitch.com/6a3a3d98-5eb7-41ba-97d2-f7c35255fe9b%2F1272896123_688220.jpg?v=1594299981549'>";
  }
}

//Code for the restart button
var restart = document.getElementById("restartButton");
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  BlueScore = 0;
  GreenScore = 0;
  YellowScore = 0;
  PurpleScore = 0;
 resultImg.innerHTML =
      "<br>";
  enableQuestions(); //Part of Extension 5
}
// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}
