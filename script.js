const scoreOne = document.getElementById("score--0");
const scoreTwo = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const holdGame = document.querySelector(".btn--hold");
const currentScoreOne = document.querySelector("#current--0");
const currentScoreTwo = document.querySelector("#current--1");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const playerOneName = document.getElementById("name--0")
const playerTwoName = document.getElementById("name--1")

scoreOne.textContent = 0;
scoreTwo.textContent = 0;
dice.classList.add("hidden");

let score;
let activePlayer;
let scores;

const switchPlayer = () => {
  if (activePlayer === 0) {
    currentScoreOne.textContent = 0;
  } else {
    currentScoreTwo.textContent = 0;
  }
  activePlayer = activePlayer === 0 ? 1 : 0;
  score = 0;
  playerOne.classList.toggle("player--active");
  playerTwo.classList.toggle("player--active");
};

const disableBtns = () => {
  rollDice.disabled = true;
  holdGame.disabled = true;
  dice.classList.add("hidden");
};
// dice roll
rollDice.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  dice.classList.remove("hidden");

  //   switch (randomNumber) {
  //     case 1:
  //       dice.src = "dice-1.png";
  //       break;
  //     case 2:
  //       dice.src = "dice-2.png";
  //       break;
  //     case 3:
  //       dice.src = "dice-3.png";
  //       break;
  //     case 4:
  //       dice.src = "dice-4.png";
  //       break;
  //     case 5:
  //       dice.src = "dice-5.png";
  //       break;
  //     case 6:
  //       dice.src = "dice-6.png";
  //       break;
  //   }

  dice.src = `dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    score += randomNumber;
    // currentScoreOne.textContent = score
    if (activePlayer === 0) {
      currentScoreOne.textContent = score;
    } else {
      currentScoreTwo.textContent = score;
    }
  } else {
    switchPlayer();
  }
});

holdGame.addEventListener("click", () => {
  // console.log(123)
  scores[activePlayer] += score;
  if (activePlayer === 0) {
    scoreOne.textContent = scores[activePlayer];
    if (scoreOne.textContent >= 50) {
      playerOne.classList.add("player--winner");
      playerOne.classList.remove("player--active");
      playerOneName.textContent = "Winner"
      disableBtns();
    }
  } else {
    scoreTwo.textContent = scores[activePlayer];
    if (scoreTwo.textContent >= 50) {
      playerTwo.classList.add("player--winner");
      playerTwo.classList.remove("player--active");
      playerTwoName.textContent = "Winner"
      disableBtns();
    }
  }

  switchPlayer();
});

const resetGame = () => {
  score = 0;
  activePlayer = 0;
  scores = [0, 0];
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentScoreOne.textContent = 0;
  currentScoreTwo.textContent = 0;
  playerOne.classList.remove("player--winner");
  playerTwo.classList.remove("player--winner");
  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");
  rollDice.disabled = false;
  holdGame.disabled = false;
  dice.classList.add("hidden");
  playerOneName.textContent = "Player 1"
  playerTwoName.textContent = "Player 2"
};

newGame.addEventListener("click", () => {
  // console.log(123)
  resetGame();
});

resetGame();
