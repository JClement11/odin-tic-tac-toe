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

    function changeTurn() {
        currentPlayer = (currentPlayer === playerOneMarker) ? playerTwoMarker : playerOneMarker;
    }
    return { changeTurn };
})();

