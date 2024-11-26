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
