let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let cells = document.querySelectorAll('.cell')
let restartButton = document.getElementById("restart")

let board
let currentPlayer
let gameOver

function init() {
    board = ['','','','','','','','','']
    currentPlayer = "X"
    gameOver = false 
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = ""
    }
}

function clickCell() {
    let idx = this.getAttribute('data-index')

    if (board[idx] === '' && !gameOver) {
        board[idx] = currentPlayer 
        this.innerText = currentPlayer

    if (checkWin()) {
        alert("Гравець " + currentPlayer + " Преміг!")
        gameOver = True
        return
    }
    if (board.indexOf("") === -1) {
        alert("Нечія!")
        gameOver = True
        return
    }

    if (currentPlayer === 'X') {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
  }
}

function checkWin() {
    for (var i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i]
        let a = combo[0]
        let b = combo[1]
        let c = combo[2]

        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true
        }
    }
    return false
}
for (var i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', clickCell);
}

restartButton.addEventListener('click', init)

init()
