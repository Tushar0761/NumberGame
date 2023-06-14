const generate = document.querySelector('#Generate')
const generated_number = document.querySelector('.generated_number')
const guessed_number = document.querySelector('#guess');
const checkButton = document.querySelector('#check')
const result = document.querySelector('.result')
const scoreBoard = document.querySelector('.current_score');
const guess = document.querySelector('.guess')
let score = 10;
let generated;
let checkShow = false
// let win = false

function scoreColor(winColor) {
  scoreBoard.style.color = winColor;
}

function gameWin(win) {
  if (!win) {
    result.style.backgroundColor = 'green'
  }
  else {
    result.style.backgroundColor = '#444'
  }
}
function gameLost(lost) {
  if (lost) {
    result.style.backgroundColor = '#ED2939'
  }
  else {
    result.style.backgroundColor = '#444'
  }
}


generate.addEventListener('click', () => {
  generated = Math.trunc(Math.random() * 10 + 1);
  gameWin(true)
  result.textContent = "Now guess Number😁!"
  scoreBoard.textContent = score = 10;
  checkButton.disabled = false;
  scoreColor('#f1f1f1f9')

  if (!checkShow) {
    guess.style.display = 'block'

  }

})

checkButton.addEventListener('click', () => {
  let numberGuessed = Number(guessed_number.value);
  if (score <= 1) {
    result.innerHTML = "You lost this game😞...<br>  Generate new and start again⛔   "

    checkButton.disabled = true;
    gameLost(true);
    scoreBoard.textContent = 0;

  } else {

    if (!numberGuessed) {
      result.textContent = "Please Enter Number.❓"
    }
    else if (numberGuessed > generated) {
      result.textContent = "Your number is Big.😐"
      score--
      scoreBoard.textContent = score;
    }
    else if (numberGuessed < generated) {
      result.textContent = "Your number is Small.😏"
      score--
      scoreBoard.textContent = score;

    } else if (numberGuessed === generated) {
      result.innerHTML = `Correct. Your Score is , ${score}💥.<br> Generate new and start Again😀`;
      checkButton.disabled = true;
      gameWin();

    }
  }

  if (score > 3 && score < 8) {
    scoreColor('rgb(192, 192, 17)');
  } else if (score <= 3) {
    scoreColor('#ED2939')
  }



})
