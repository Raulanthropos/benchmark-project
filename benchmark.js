const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-text"));
const progressText = document.querySelector("#progressText");
const newButton = document.querySelector("#nextbtn");
const choiceBox = document.querySelectorAll(".choice-container");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

// restarting Animation Timer
const restartAnimation = function () {
  console.log("starting timer");
  let circle = document.querySelector("circle");
  circle.style.animationName = "none";

  requestAnimationFrame(() => {
    circle.style.animationName = "anim";
  });
};

//using last week's array , modified to fit the code


let questions = [
  {
    question: "HTML is what type of language?",
    choice1: "Macro Language",
    choice2: "Scripting Language",
    choice3: "Markup Language",
    choice4: "Programming Language",
    answer: 3,
  },
  {
    question: "What does CPU stand for?",
    choice1: "Central Process Unit",
    choice2: "Central Processing Unit",
    choice3: "Computer Personal Unit",
    choice4: "Central Processor Unit",
    answer: 2,
  },
  {
    question: "What is the most preferred image format used for logos?",
    choice1: ".png",
    choice2: ".jpeg",
    choice3: ".svg",
    choice4: ".gif",
    answer: 3,
  },
  {
    question: "In web design, what does CSS stand for?",
    choice1: "Counter Strike: Source",
    choice2: "Cascading Style Sheet",
    choice3: "Corrective Style Sheet",
    choice4: "Computer Style Sheet",
    answer: 2,
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    choice1: "Nougat",
    choice2: "Ice Cream Sandwich",
    choice3: "Jelly Bean",
    choice4: "Marshmallow",
    answer: 1,
  },
  //6
  {
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesnt get modified?",
    choice1: "Final",
    choice2: "Static",
    choice3: "Private",
    choice4: "Public",
    answer: 1,
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    choice1: "140",
    choice2: "120",
    choice3: "160",
    choice4: "100",
    answer: 1,
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    choice1: "Java",
    choice2: "Python",
    choice3: "C",
    choice4: "Jakarta",
    answer: 1,
  },
  {
    question:
      "Which of the following tag is used for inserting the largest heading in HTML?",
    choice1: "<h6>",
    choice2: "<h1>",
    choice3: "<h3>",
    choice4: "<h5>",
    answer: 2,
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    choice1: "src",
    choice2: "alt",
    choice3: "longdesc",
    choice4: "title",
    answer: 2,
  },
];

const MAX_QUESTIONS = 10;
const SCORE_POINTS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
restartAnimation();
  for (let i = 0; i < choiceBox.length; i++) {
    choiceBox[i].classList.remove("choice-container-selected");
  }
  
  //the end redirects the page to the next one (results) after it reached the limit of questions, keeps track of points
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return (window.location.href = "./result.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";

    //adds 10 points if the answer is right
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    /* choices.forEach((choice, clickedAnswer) => {
  //starting the loop to inspect the answer buttons (choices is an array)
  choice.addEventListener("click", () => {
    //adding event listeners to each answer button
    console.log(`You clicked on ${clickedAnswer + 1}`); //checking if the clicked register
    let finalAnswer = clickedAnswer + 1; //declaring variable for storing the index of the clicked answer button
    console.log("You have stored this answer: ", finalAnswer); //checking to see what index was stored
    if (finalAnswer === currentQuestion.answer) {
      //comparing our stored value from above, against the correct answer value
      totalCorrect += 1; //if true, increments totalCorrect by 1

      getNewQuestion(); //then calls the getNewQuestion function in order to move to the next one
    } else {
      //if false, increment wrong answers by 1
      totalWrong += 1;
      getNewQuestion(); //load new question
    }
    console.log("You have answered correct ", totalCorrect, " times");
  });
  // redirect(totalCorrect);
});

const redirect = (i, j) => {
  //declaring the function to pass the dynamic parameters i and j, as long as static ones
  const numberToPass = i; //dynamic
  const totalWrong = j; //dynamic
  const numberOfQuestions = MAX_QUESTIONS; //static
  window.location.href =
    "results.html?numberToPass=" +
    numberToPass +
    "&numberOfQuestions=" + //syntax for passing multiple parameters to results page
    numberOfQuestions +
    "&totalWrong=" +
    totalWrong; 
    */
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 60000);
  });
});

newButton.addEventListener("click", () => {
  getNewQuestion();
  timeSecond = 30;
  newButton.classList.add("unclickable");
});

startGame();

const timeH = document.querySelector("h3");
let timeSecond = 30;
timeH.innerHtml = timeSecond;

const countDown = setInterval(() => {
  timeSecond--;
  timeH.innerHTML = timeSecond;
  if (timeSecond < 0) {
    timeSecond = 30;
    timeH.innerHTML = timeSecond;
    getNewQuestion();
  }
}, 1000);

for (let i = 0; i < choiceBox.length; i++) {
  choiceBox[i].addEventListener("click", function () {
    choiceBox[i].classList.add("choice-container-selected");

    console.log(choiceBox[i]);
  });
}

choiceBox.forEach((box, index) => {
  box.addEventListener("click", function () {
    choiceBox.forEach((otherBoxes, prevIndex) => {
      if (prevIndex !== index) {
        otherBoxes.classList.remove("choice-container-selected");
      }
    });
  });
});

// choiceBox.addEventListener("click", function () {
//   if (choiceBox.click) {
//     newButton.disabled = false;
//     newButton.classList.remove("no-click");
//   } else {
//     newButton.disabled = true;
//     newButton.classList.add("no-click");
//   }
// });
for (let i = 0; i < choiceBox.length; i++) {
  choiceBox[i].addEventListener("click", function () {
    newButton.classList.remove("unclickable");

  });
}
