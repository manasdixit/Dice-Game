'use strict';

//SELECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnInst = document.querySelector('.btn-instruction');
const modalContainer = document.querySelector('.modal-container');
const btnClose = document.querySelector('.closebtn');
const gameBlock = document.querySelector('.main-game');

//VARIABLE DECLARATIONS @ManasDixit
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

//FUNCTION DEFINATIONS

const newGame = function () {
  currentScore = 0;
  activePlayer = 0;
  scores[(0, 0)];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//EVENT LISTENERS

//ROLLING DICE FUNCTIONALITY @ManasDixit
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log('Random Number: ' + dice);

    //DISPLAYING THE DICE ACCORDING TO THE RANDOM NUMBER @ManasDixit

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //ADD DICE TO THE CURRENT SCORE @ManasDixit
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // SWITCH THE PLAYER
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //FINISH THE GAME @ManasDixit
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', newGame);

btnInst.addEventListener('click', function () {
  modalContainer.classList.remove('hidden');
  gameBlock.classList.add('hidden');
});

btnClose.addEventListener('click', function () {
  modalContainer.classList.add('hidden');
  gameBlock.classList.remove('hidden');
});
