const startBtn = document.querySelector("#startBtn");
const question = document.querySelector("#question");
const questionText = document.querySelector("#questionText");
const nextBtn = document.querySelector("#nextBtn");
const answer = document.querySelector("#answer");
const score = document.querySelector("#score");
const message = document.querySelector("#message");

let currentQuestion = 0;
let scoreCounter = 0;
let messageText = [
  "you are really braindead",
  "you will be accepted in society",
  "nice",
];

let questions = [
  { question: "15-1(12/4+1)", answer: "10" },
  { question: "3+7÷2", answer: "17" },
  { question: "3-5*2", answer: "-7" },
  { question: "6/2(1+2)", answer: "9" },
  { question: "5*2", answer: "10" },
  { question: "3+3x3-3+3", answer: "12" },
  { question: "10+10*0+10", answer: "20" },
  { question: "8-1x0+2÷2", answer: "9" },
  { question: "A-3+3x0", answer: "8" },
  { question: "3+7*2", answer: "17" },
  { question: "3-5*2", answer: "-7" },
  { question: "6/2(1+2)", answer: "9" },
];

startBtn.addEventListener("click", function () {
  startBtn.style.visibility = "hidden";
  question.style.display = "flex";
  questionText.textContent = questions[currentQuestion].question;
});

nextBtn.addEventListener("click", function () {
  if (answer.value == questions[currentQuestion].answer) {
    scoreCounter++;
  }
  answer.value = "";
  currentQuestion++;
  if (currentQuestion == questions.length) {
    question.style.display = "none";
    score.textContent = `you got ` + scoreCounter + ` score`;
    console.log(message);
    if (score < 2) {
      message.textContent = messageText[0];
    } else if (score > 2 && score < 5) {
      message.textContent = messageText[1];
    } else {
      message.textContent = messageText[2];
    }

    return;
  }
  questionText.textContent = questions[currentQuestion].question;
});
