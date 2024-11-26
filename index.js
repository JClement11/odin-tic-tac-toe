let currentPlayer = 1;

const Gameboard = (function () {
    const gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    return { gameboard };
})();

function createPlayer(player) {
    return { player };
};

function placeMark(currentPlayer) {
    const playerOneMark = "X";
    const playerTwoMark = "O";
    if (currentPlayer === 1) {
        checkWinCondition();
        changePlayerTurn(currentPlayer);
    }
    else if (currentPlayer === 2) {
        checkWinCondition();
        changePlayerTurn(currentPlayer);
    }
}

function changePlayerTurn(currentPlayer) {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    placeMark(currentPlayer);
}

function checkWinCondition() {
    for (let row = 0; row < 3; row++) {
        if (Gameboard.gameboard[row][0] !== "" && Gameboard.gameboard[row][0] === Gameboard.gameboard[row][1] &&
            Gameboard.gameboard[row][0] === Gameboard.gameboard[row][2]) {
            return Gameboard.gameboard[row][0];
        }
    }

    for (let column = 0; column < 3; column++) {
        if (Gameboard.gameboard[0][column] !== "" && Gameboard.gameboard[0][column] === Gameboard.gameboard[1][column] &&
            Gameboard.gameboard[0][column] === Gameboard.gameboard[2][column]) {
            return Gameboard.gameboard[0][column];
        }
    }

    if (Gameboard.gameboard[0][0] !== "" && Gameboard.gameboard[0][0] === Gameboard.gameboard[1][1] &&
        Gameboard.gameboard[0][0] === Gameboard.gameboard[2][2]) {
        return Gameboard.gameboard[0][0];
    }
    if (Gameboard.gameboard[0][2] !== "" && Gameboard.gameboard[0][2] === Gameboard.gameboard[1][1] &&
        Gameboard.gameboard[0][2] === Gameboard.gameboard[2][0]) {
        return Gameboard.gameboard[0][2];
    }

    if (Gameboard.gameboard.every(row => row.every(element => element !== ""))) {
        return true;
    }

    return false;
}
function renderBoard(gameboard) {
    let table = document.createElement("table");

    for (let row of gameboard) {
        let tableRow = document.createElement("tr");

        for (let cell of row) {
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }

        table.appendChild(tableRow);
    }

    return table;
}

document.body.appendChild(renderBoard(Gameboard.gameboard));