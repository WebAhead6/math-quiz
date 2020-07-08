// array that holds all the correct answers
const correctAnswer = ['A','B','C','D'];
const form = document.querySelector('.quiz-form');
const allqs = document.querySelectorAll("div.my-5");
const result = document.querySelector('.result');
const submitBtn = document.querySelector('#submitbtn');
// allqs.forEach( (elemenet,index) => {
//     console.log(elemenet,index);
// });
// console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("788fyeugwdjkOEWGPREOIUYBEFHSJAKDNLM");
    let score = 0;
    console.log();
    let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(answers);
    // check answers
    answers.forEach((answer,index)=> {
        if( answer === correctAnswer[index]){
            score+=25;
        }
    });
    // console.log(score);
    //show result on page
    // we dont need to add the window object to use scrollTo, but this was done to emphasis the use of the global object
    window.scrollTo(0,0);
    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
});

// setTimeout(() => {
//     alert('Hello user');
// }, 3000);

// timer SECTION \1\111111!!!!!!!!!!!!
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 2;
var interval = setInterval(setTime, 1000);



function setTime() {
  totalSeconds--;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  if(totalSeconds <= 0){
      const inputs = document.querySelectorAll('input');
      clearInterval(interval);
    //   console.log(inputs);
    inputs.forEach( e => {
        if(e.classList.contains('btn')){
            e.disabled = false;
        }
        e.disabled = true;
    })
    minutesLabel.classList.add("d-none");
    secondsLabel.classList.add("d-none");
    minutesLabel.nextElementSibling.classList.add("d-none");
    
    
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