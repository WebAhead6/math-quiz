// array that holds all the correct answers
// const correctAnswer = ["A", "B", "C", "D"];
const nextBtn = document.querySelector("#nextBTN");
const answer = document.querySelector("#answer");
const startBtn = document.querySelector("#startBtn");
var interval;
let answerfield = document.querySelector('.asnwer-field');
let timerClock = document.querySelector('.timer');
let currentQuestion = 0;
let scoreCounter = 0;
let messageText = [
  "you are really braindead",
  "you will be accepted in society",
  "nice",
];

let questions = [
  { question: "5*2", answer: "10" },
  { question: "3+7*2", answer: "17" },
  { question: "3-5*2", answer: "-7" },
  { question: "6/2(1+2)", answer: "9" },
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
    result.querySelector("span").textContent = `${output}%`;
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
answerfield.classList.add('d-none');
nextBtn.classList.add('d-none');

nextBtn.addEventListener("click", function () {
    console.log(answer.value);
  if (answer.value == questions[currentQuestion].answer) {
    alert('Correct Answer!');
    scoreCounter+=25;
  }
  answer.value = "";
  currentQuestion++;
  if (currentQuestion == questions.length) {
    //   question.style.display = "none";
    clearInterval(interval);
    hideTimer();
    submit();
    
  }

  questionText.textContent = questions[currentQuestion].question;
});

  startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    startBtn.classList.add('d-none');
    nextBtn.classList.remove('d-none');
    answerfield.classList.remove('d-none');

    questionText.textContent = questions[currentQuestion].question;
    interval = setInterval(setTime, 1000);
    timerClock.classList.remove('d-none');

  });

// --------------------------------------------------------------- SUBMISSION LOGIC END! ------------------------------------------

// --------------------------------------------------------------- TIMER SECTION --------------------------------------------------
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 30;

function setTime() {
  totalSeconds--;

  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  if (totalSeconds <= 0) {
    const inputs = document.querySelectorAll("input");
    clearInterval(interval);
    inputs.forEach((e) => {
      if (e.classList.contains("btn-light")) {
          e.disabled = false;
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
//   minutesLabel.classList.add("d-none");
//   secondsLabel.classList.add("d-none");
console.log(timerClock);
  timerClock.classList.add('d-none');
//   minutesLabel.nextElementSibling.classList.add("d-none");
}
//-------------------------------------------------------- TIMER SECTION END -----------------------------------------------

//-------------------------------------------------------- QUESTION LOGIC ---------------------------------------------------
