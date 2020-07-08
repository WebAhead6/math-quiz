// ------------------------------------------------ defintions ------------------------------------------------------------------
// array that holds all the correct answers
// const correctAnswer = ["A", "B", "C", "D"];
const nextBtn = document.querySelector("#nextBTN");
const answer = document.querySelector("#answer");
const startBtn = document.querySelector("#startBtn");
const resetBtn=document.querySelector("#resetBtn")
let answerfield = document.querySelector(".asnwer-field");
let timer = document.querySelector(".timer");
let currentQuestion = 0;
let scoreCounter = 0;
let messageText = [
  "you are really braindead",
  "you will be accepted in society",
  "nice",
];

let questions = [
  { question: "9x8=", answer: "72" },
  { question: "3+7x12=", answer: "87" },
  { question: "3-5*2=", answer: "-7" },
  { question: "6÷2-10x2=", answer: "-17" },
  { question: "3+3x3-3+3=", answer: "12" },
  { question: "10+10*0+10=", answer: "20" },
  { question: "8-1x0+2÷2=", answer: "9" },
  { question: "(18÷6x5)-14÷7=", answer: "13" },
  { question: "if 111=13 112=24 113=35 Then 116=?", answer: "68" },
  { question: "if 2+5=12 3+6=21 8+11=?" ,answer: "96"},

];

const form = document.querySelector(".quiz-form");
const allqs = document.querySelectorAll("div.my-5");
const result = document.querySelector(".result");
// const questions = document.querySelector('#questions');
// allqs.forEach( (elemenet,index) => {
//     console.log(elemenet,index);
// });
// console.log(form);
//---------------------------------------------------------- Submission LOGIC! -------------------------------------------------------
const submit = (e) => {
  console.log("EVENT INVOKED");
  if (e) {
    e.preventDefault();
  }
  //   let score = 0;
  //   console.log(form.q1);
  //   let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //   console.log(answers);
  //   // check answers
  //   answers.forEach((answer, index) => {
  //         if (answer === correctAnswer[index]) {
  //         score += 25;
  //         }
  //     })
  // console.log(score);
  //show result on page
  // we dont need to add the window object to use scrollTo, but this was done to emphasis the use of the global object

  window.scrollTo(0, 0);
  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}`*2;
    if (output === scoreCounter) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  hideTimer();
};

form.onsubmit = submit;

//-------- next question logic -------
answerfield.classList.add("d-none");
nextBtn.classList.add("d-none");

// answer.addEventListener("change",function() {
//   if (!parseInt(answer.value[answer.value.length])) {
//     answer.value=answer.value.slice(answer.value.length)

//   }
// })

nextBtn.addEventListener("click", function () {
  

  console.log(answer.value);
  if (answer.value == questions[currentQuestion].answer) {
    // alert('Correct Answer!');
    scoreCounter += 5;
  }
  answer.value = "";
  currentQuestion++;
  if (currentQuestion == questions.length) {
    nextBtn.classList.add("d-none")
    answerfield.classList.add("d-none")
    questionText.classList.add("d-none")
      resetBtn.classList.remove("d-none")
    //   question.style.display = "none";
    //submit();

  }

  questionText.textContent = questions[currentQuestion].question;
});

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  startBtn.classList.add("d-none");
  nextBtn.classList.remove("d-none");
  answerfield.classList.remove("d-none");
  

  questionText.textContent = questions[currentQuestion].question;
  var interval = setInterval(setTime, 1000);
  timer.classList.remove("d-none");
});

function myButton() {
  startBtn.classList.remove("d-none")
  answerfield.classList.add("d-none")
  questionText.classList.add("d-none")
  nextBtn.classList.add("d-none")
  resetBtn.classList.add("d-none")
}
// --------------------------------------------------------------- SUBMISSION LOGIC END! ------------------------------------------

// --------------------------------------------------------------- TIMER SECTION --------------------------------------------------
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 600;

function setTime() {
  totalSeconds--;

  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  if (totalSeconds <= 0) {
    const inputs = document.querySelectorAll("input");
    clearInterval(interval);
    inputs.forEach((e) => {
      if (e.classList.contains("btn-light")) {
      } else {
        e.disabled = true;
      }
    });
    submit();
    hideTimer();
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function hideTimer() {
  minutesLabel.classList.add("d-none");
  secondsLabel.classList.add("d-none");
  minutesLabel.nextElementSibling.classList.add("d-none");
}
//-------------------------------------------------------- TIMER SECTION END -----------------------------------------------

//-------------------------------------------------------- QUESTION LOGIC ---------------------------------------------------
