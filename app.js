console.log("Welcome to Tic-tac-toe");
let audioTurn = new Audio('/sound/ting.mp3');
let winSound = new Audio('/sound/gameover.mp3')
let turn = "X"
let isGameOver = false;

//function to change the turn
let changeTurn = () => {

    this.updateColor();
    return turn === "X" ? "O" : "X"
}

function updateColor() {
    let playerX = document.querySelector('.player-x')
    let playerO = document.querySelector('.player-o')
    playerX.classList.remove('active')
    playerO.classList.remove('active')


    if (turn == 'X') {
        playerO.classList.add('active')
    } else {
        playerX.classList.add('active')
    }
}

//Function to check for a win
const checkWin = () => {
    let tileTexts = document.getElementsByClassName('tileText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((tileTexts[e[0]].innerText === tileTexts[e[1]].innerText) && (tileTexts[e[2]].innerText === tileTexts[e[1]].innerText) && (tileTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "Player " + tileTexts[e[0]].innerText + " Won!!!"
            //    isGameOver = true;
            winSound.play()
        }
    })
}



//Game logic
let boardTiles = document.getElementsByClassName('boardTile');
Array.from(boardTiles).forEach(element => {
    let tileText = element.querySelector('.tileText')
    element.addEventListener('click', () => {
        if (tileText.innerText === '') {
            tileText.innerText = turn;
            turn = changeTurn();
            audioTurn.play()

            checkWin();

        }
    })
})

// Adding onclick listener to Start btn
let restartButton = document.querySelector('.restart');

//Adding and removing active class
let playerX = document.querySelector('.player-x')
let playerO = document.querySelector('.player-o')


restartButton.addEventListener('click', () => {
    let tileTexts = document.querySelectorAll('.tileText')
    Array.from(tileTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    if (restartButton) {
        playerX.classList.add('active');
        playerO.classList.remove('active');
    }
    isGameOver = false
    document.querySelector('.info').innerText = "Game Begin's!!!"

})