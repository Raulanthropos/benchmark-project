const nextButton = document.getElementById("proceed-button");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex;
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
window.onload = () => {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
};

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function resetState() {}
const questions = [
  /*question 1 */ {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
    ],
  },
  /*question 2 */
  {
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    answers: [
      { text: "Final", correct: true },
      { text: "Static", correct: false },
      { text: "Private", correct: false },
      { text: "Public", correct: false },
    ],
  },
  /*question 3 */
  {
    question: "The logo for Snapchat is a Bell.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  /*question 4 */
  {
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  /*question 5 */
  {
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    answers: [
      { text: ".svg", correct: true },
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".gif", correct: false },
    ],
  },
  /*question 6 */
  {
    question: "In web design, what does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheet", correct: true },
      { text: "Counter Strike: Source", correct: false },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
    ],
  },
  /*question 7 */
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    answers: [
      { text: "Nougat", correct: true },
      { text: "Ice Cream Sandwich", correct: false },
      { text: "Jelly Bean", correct: false },
      { text: "Marshmallow", correct: false },
    ],
  },
  /*question 8 */
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    answers: [
      { text: "140", correct: true },
      { text: "120", correct: false },
      { text: "160", correct: false },
      { text: "100", correct: false },
    ],
  },
  /*question 9 */
  {
    question: "Linux was first created as an alternative to Windows XP.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  /*question 10 */
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answers: [
      { text: "Java", correct: true },
      { text: "Python", correct: false },
      { text: "C", correct: false },
      { text: "Jakarta", correct: false },
    ],
  },
];
