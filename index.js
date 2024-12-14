const Gameboard = (function () {
    let gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    return { gameboard };
})();

const GameController = (function () {
    let gameOver = false;
    let playerOne = {};
    let playerTwo = {};
    let currentPlayerMark = playerOne.mark;
    let currentPlayerName = playerOne.name;
    let text;

    function startGame() {
        const form = document.querySelector("#form-container");
        const startButton = document.querySelector("#start");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            playerOne = GameController.createPlayer(document.querySelector("#player1").value, "X");
            playerTwo = GameController.createPlayer(document.querySelector("#player2").value, "O");
            DisplayController.displayBoard();
            form.remove();
            startButton.remove();

            let boardContainer = document.querySelector("#board-container");
            let resetButton = document.createElement("button");
            resetButton.textContent = "NEW GAME";
            boardContainer.appendChild(resetButton);
            resetButton.addEventListener("click", resetGame);

            let textContainer = document.querySelector("#text-container");
            let paragraph = document.createElement("p");
            text = document.createTextNode(`${playerOne.name}'s turn`);
            paragraph.appendChild(text);
            textContainer.appendChild(paragraph);
        });
    }

    function resetGame() {
        let board = Gameboard.gameboard;
        const cells = document.querySelectorAll(".cell");
        currentPlayerMark = playerOne.mark;
        currentPlayerName = playerOne.name;
        text.textContent = `${currentPlayerName}'s turn`;

        cells.forEach(cell => {
            cell.textContent = "";
        });

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = "";
            }
        }
    }

    function createPlayer(name, mark) {
        name = name;
        mark = mark
        return { name, mark };
    }

    function placeMark(cell, row, column) {
        if (cell.textContent === "") {
            cell.textContent = currentPlayerMark;
            Gameboard.gameboard[row][column] = currentPlayerMark;
            checkWin(Gameboard.gameboard, currentPlayerMark);
            if (gameOver === false) {
                changeTurn();
            }
            else {
                gameOver = false;
            }
        }
    }

    function changeTurn() {
        currentPlayerMark = (currentPlayerMark === playerOne.mark) ? playerTwo.mark : playerOne.mark;
        currentPlayerName = (currentPlayerName === playerOne.name) ? playerTwo.name : playerOne.name;
        text.textContent = `${currentPlayerName}'s turn`;
    }

    function checkWin(board, player) {

        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            if (board[rowIndex][0] === player && board[rowIndex][1] === player && board[rowIndex][2] === player) {
                gameOver = true;
                setTimeout(function () {
                    alert(`${currentPlayerName} Wins!`);
                    resetGame();
                }, 0);
                return true;
            }
        }
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
            if (board[0][columnIndex] === player && board[1][columnIndex] === player && board[2][columnIndex] === player) {
                gameOver = true;
                setTimeout(function () {
                    alert(`${currentPlayerName} Wins!`);
                    resetGame();
                }, 0);
                return true;
            }
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player ||
            board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            gameOver = true;
            setTimeout(function () {
                alert(`${currentPlayerName} Wins!`);
                resetGame();
            }, 0);
            return true;
        }
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                if (board[row][column] === "") {
                    return false;
                }
            }
        }
        gameOver = true;
        setTimeout(function () {
            alert("It's a tie!");
            resetGame();
        }, 0);
    }

    startGame();

    return { startGame, resetGame, createPlayer, placeMark, changeTurn, checkWin };
})();

const DisplayController = (function () {
    function displayBoard() {
        const gameboardContainer = document.querySelector("#board-container");
        const table = document.createElement("table");
        let board = Gameboard.gameboard;

        board.forEach((row, rowIndex) => {
            let tableRow = document.createElement("tr");
            row.forEach((cell, columnIndex) => {
                let cellContainer = document.createElement("td");
                cellContainer.classList.add("cell");
                cellContainer.textContent = cell;

                cellContainer.addEventListener("click", () => {
                    GameController.placeMark(cellContainer, rowIndex, columnIndex);
                });

                tableRow.appendChild(cellContainer);
            });
            table.appendChild(tableRow);
        });
        gameboardContainer.appendChild(table);
    }

    return { displayBoard }
})();