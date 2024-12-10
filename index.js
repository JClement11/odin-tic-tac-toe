const Gameboard = (function () {
    let gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    return { gameboard };
})();

const GameController = (function () {
    const playerOneMarker = "X";
    const playerTwoMarker = "O";
    let currentPlayer = playerOneMarker;
    function placeMark(cell, row, column) {
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            Gameboard.gameboard[row][column] = currentPlayer;
            checkWin(Gameboard.gameboard, currentPlayer);
            changeTurn();
        }
    }

    function changeTurn() {
        currentPlayer = (currentPlayer === playerOneMarker) ? playerTwoMarker : playerOneMarker;
    }

    function checkWin(board, player) {

        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            if (board[rowIndex][0] === player && board[rowIndex][1] === player && board[rowIndex][2] === player) {
                return console.log("win");
            }
        }
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
            if (board[0][columnIndex] === player && board[1][columnIndex] === player && board[2][columnIndex] === player) {
                return console.log("win");
            }
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player ||
            board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return console.log("win");
        }
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                if (board[row][column] === "") {
                    return false;
                }
            }
        }
        return console.log("tie");
    }

    return { placeMark, changeTurn, checkWin };
})();

