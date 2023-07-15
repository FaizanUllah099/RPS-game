// Getting Data from LocalStorage or Default object
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
// Giving data to .js-score Element in DOM
updateScore('Your previous score:');
// Creating function for comparing Player and Computer MOve
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result;
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.'
        }

        if (computerMove === 'paper') {
            result = 'You Lose.'
        }

        if (computerMove === 'scissors') {
            result = 'You Win.'
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win.'
        }

        if (computerMove === 'paper') {
            result = 'Tie.'
        }

        if (computerMove === 'scissors') {
            result = 'You Lose.'
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose.'
        }

        if (computerMove === 'paper') {
            result = 'You Win.'
        }

        if (computerMove === 'scissors') {
            result = 'Tie.'
        }
    }

    // Creating function for result win, lose or tie after comparing move
    if (result === 'You Win.') {
        score.wins += 1;
        document.querySelector('.result').classList.add('green');
        document.querySelector('.result').classList.remove('red');
    }

    else if (result === 'You Lose.') {
        score.loses += 1;
        document.querySelector('.result').classList.add('red');
        document.querySelector('.result').classList.remove('green');
    }

    else if (result === 'Tie.') {
        score.ties += 1;
        document.querySelector('.result').classList.remove('red');
        document.querySelector('.result').classList.remove('green');
    }

    // Setting data to LocalStorage
    localStorage.setItem('score', JSON.stringify(score));
    // Updating data to the DOM after comparing, resulting and Setting to local storage
    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move')
        .innerHTML = ` You Pick
        <img src="./img/${playerMove}-emoji.png" class="img">
        Computer pick
        <img src="./img/${computerMove}-emoji.png" class="img">
        `;
}

// Ceating function for updating score to the DOM
function updateScore(pre = 'Score Board :') {
    document.querySelector('.js-score')
        .innerHTML = `${pre} Win: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}
// Creating function for Computer move
function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}