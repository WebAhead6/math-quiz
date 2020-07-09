// ------------------------------------------------ defintions ------------------------------------------------------------------

const nextBtn = document.querySelector("#nextBTN");
const answer = document.querySelector("#answer");
const startBtn = document.querySelector("#startBtn");
const resetBtn=document.querySelector("#resetBtn")
var interval;
let answerfield = document.querySelector('.asnwer-field');
let timerClock = document.querySelector('.timer');
let message = document.querySelector('.message');

let currentQuestion = 0;
let scoreCounter = 0;
let messageText = [
  "you are really braindead",
  "you will be accepted in society",
  "Nice!",
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
const result = document.querySelector(".result");
// const questions = document.querySelector('#questions');
// allqs.forEach( (elemenet,index) => {
//     console.log(elemenet,index);
// });
// console.log(form);
//---------------------------------------------------------- Submission LOGIC! -------------------------------------------------------
// function that submits the form upon completino or on timer time up!
const submit = (e) => {
  console.log("EVENT INVOKED");
  if (e) {
    e.preventDefault();
  }
  window.scrollTo(0, 0);
  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}`;
    if (output === scoreCounter) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  hideTimer();
  message.classList.add("effect");
  if (scoreCounter < 5) {
    message.innerHTML= messageText[0];
    
  } else if (scoreCounter >= 5 && scoreCounter < 15) {
    message.innerHTML = messageText[1];
  } else {
    message.innerHTML = messageText[2];
  }
};
form.onsubmit = submit;

//-------- next question logic -------
//making sure that the answerfield and the next q button are not displayed on page load!
answerfield.classList.add('d-none');
nextBtn.classList.add('d-none');

startBtn.addEventListener("click", e => {
  e.preventDefault();
  // hiding the Start button!
  startBtn.classList.add('d-none');
  // making sure that the next Q button and the answer field are now displayed
  nextBtn.classList.remove('d-none');
  answerfield.classList.remove('d-none');

  questionText.textContent = questions[currentQuestion].question;
  interval = setInterval(setTime, 1000);
  timerClock.classList.remove('d-none');

});


nextBtn.addEventListener("click", function () {
    console.log(answer.value);
  if (answer.value == questions[currentQuestion].answer) {
    // alert('Correct Answer!');
    scoreCounter+= 5;
  }
  answer.value = "";
  currentQuestion++;
  if (currentQuestion == questions.length) {
    nextBtn.classList.add("d-none")
    answerfield.classList.add("d-none")
    questionText.classList.add("d-none")
    resetBtn.classList.remove("d-none")

    clearInterval(interval);
    hideTimer();
    submit();
    
  }

  questionText.textContent = questions[currentQuestion].question;
});
/// play again button or a reset button!
function playAgainButton() {
  startBtn.classList.remove("d-none");
  answerfield.classList.add("d-none");
  questionText.classList.add("d-none");
  nextBtn.classList.add("d-none");
  resetBtn.classList.add("d-none");
  result.classList.remove("d-none");
  location.reload();
  return false; 
}
  
// --------------------------------------------------------------- SUBMISSION LOGIC END! ------------------------------------------

// --------------------------------------------------------------- TIMER SECTION --------------------------------------------------
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 90;

function setTime() {
  totalSeconds--;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  if (totalSeconds <= 0) {
    // const inputs = document.querySelectorAll("input");
    clearInterval(interval);
    // inputs.forEach((e) => {
    //   if (e.classList.contains("btn-light")) {
    //       e.disabled = false;
    //   } else {
    //     e.disabled = true;
    //   }
    // });
    nextBtn.classList.add("d-none")
    answerfield.classList.add("d-none")
    questionText.classList.add("d-none")
    resetBtn.classList.remove("d-none")

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
