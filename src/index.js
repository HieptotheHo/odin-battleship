import "./style.css";

import createGameBoard from "./gameBoard.js";

const WIDTH = 10;
const HEIGHT = 10;

const GameController = () => {
  const playerBoard = createGameBoard(WIDTH, HEIGHT);
  const computerBoard = createGameBoard(WIDTH, HEIGHT);

  let turn = 1;
  let currentPlayer = playerBoard;
  let opponentPlayer = computerBoard;

  const randomPlacement = (board) => {
    board.getShips().forEach((ship) => {
      let DIRECTIONS = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
      ];
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (true) {
        let index = Math.floor(Math.random() * DIRECTIONS.length);
        let direction = DIRECTIONS[index];
        DIRECTIONS.splice(index, 1);

        if (board.placeShip(x, y, direction, ship) === -1) {
          index = Math.floor(Math.random() * DIRECTIONS.length);
          direction = DIRECTIONS[index];
        } else {
          break;
        }
        if (DIRECTIONS.length === 0) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          DIRECTIONS = [
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0],
          ];
        }
      }
    });
  };
  randomPlacement(playerBoard);
  randomPlacement(computerBoard);

  const getTurn = () => turn;
  const getCurrentPlayer = () => currentPlayer;
  const getOpponentPlayer = () => opponentPlayer;
  const getPlayer1 = () => playerBoard;
  const getPlayer2 = () => computerBoard;

  const switchPlayerTurn = () => {
    turn = turn === 1 ? 2 : 1;
    if (turn === 1) {
      currentPlayer = playerBoard;
      opponentPlayer = computerBoard;
    } else {
      currentPlayer = computerBoard;
      opponentPlayer = playerBoard;
    }
  };

  const playRound = (x, y) => opponentPlayer.receiveAttack(x, y);
  const checkWin = () => {
    if (getPlayer1().allSunk()) return 2;
    if (getPlayer2().allSunk()) return 1;
    return 0;
  };
  return {
    getTurn,
    getCurrentPlayer,
    getOpponentPlayer,
    playRound,
    getPlayer1,
    getPlayer2,
    switchPlayerTurn,
    checkWin,
  };
};

const UIController = () => {
  const playerBoardDOM = document.querySelector(".player1.board");
  const computerBoardDOM = document.querySelector(".player2.board");

  const start = false;
  const modal = document.querySelector("dialog");
  modal.showModal();

  const startButton = document.querySelector(".start");
  startButton.addEventListener("click", (e) => {
    reset();
    modal.close();
  });
  const attack = (e, gameController) => {
    const x = e.target.dataset.location.split("-")[0];
    const y = e.target.dataset.location.split("-")[1];
    e.target.classList.add("shot");

    if (gameController.playRound(x, y)) {
      e.target.classList.add("hit");

      e.target.innerHTML =
        '<div class="mark"><div class= "first"></div><div class="second"></div></div>';
      return true;
    }
    e.target.style.backgroundColor = "gray";
    e.target.innerHTML = "<p>o</p>";
    return false;
  };

  // SET UP TILES for both

  const displayShips = (board, side) => {
    const colors = [
      "orange",
      "yellow",
      "indigo",
      "green",
      "black",
      "blue",
      "yellowgreen",
      "violet",
      "cyan",
      "pink",
    ];
    let sideSelector = "";
    if (side === 1) {
      sideSelector = "player1";
    } else sideSelector = "player2";
    board.getShips().forEach((ship) => {
      const indexColor = Math.floor(Math.random() * colors.length);
      ship.getLocations().forEach((location) => {
        const x = location[0];
        const y = location[1];

        const tile = document.querySelector(
          `.${sideSelector} > .tile[data-location="${x}-${y}"]`
        );
        tile.style.backgroundColor = colors[indexColor];
      });
      colors.splice(indexColor, 1);
    });
  };
  const reset = () => {
    const computerTiles = [];

    playerBoardDOM.innerHTML = "";
    computerBoardDOM.innerHTML = "";
    const player1Cover = document.createElement("div");
    player1Cover.classList.add("cover");
    player1Cover.style.visibility = "visible";
    const player2Cover = document.createElement("div");
    player2Cover.classList.add("cover");
    player2Cover.style.visibility = "hidden";

    const gameController = GameController();
    const computerPlay = (gameController) => {
      while (gameController.getTurn() === 2) {
        console.log(computerTiles);
        const randomTile = Math.floor(Math.random() * computerTiles.length);
        computerTiles[randomTile].click();
        computerTiles.splice(randomTile, 1);
        console.log("heello");
      }
    };
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        const playerTileDOM = document.createElement("div");
        playerTileDOM.classList.add("tile");
        playerTileDOM.setAttribute("data-location", `${i}-${j}`);
        playerTileDOM.addEventListener("click", (e) => {
          if (
            !e.target.classList.contains("shot") &&
            e.target.classList.contains("tile")
          ) {
            if (gameController.getTurn() === 2) {
              if (attack(e, gameController)) {
                if (gameController.checkWin()) {
                  modal.showModal();
                }
              } else {
                player2Cover.style.visibility = "hidden";
                player1Cover.style.visibility = "visible";
                gameController.switchPlayerTurn();
              }
            }
          }
        });

        const computerTileDOM = document.createElement("div");
        computerTileDOM.classList.add("tile");
        computerTileDOM.setAttribute("data-location", `${i}-${j}`);

        computerTileDOM.addEventListener("click", (e) => {
          if (
            !e.target.classList.contains("shot") &&
            e.target.classList.contains("tile")
          )
            if (gameController.getTurn() === 1) {
              // if(e.classList.contains())
              if (attack(e, gameController)) {
                if (gameController.checkWin()) {
                  modal.showModal();
                }
              } else {
                player1Cover.style.visibility = "hidden";
                player2Cover.style.visibility = "visible";
                gameController.switchPlayerTurn();
              }
              computerPlay(gameController);
            }
        });
        computerTiles.push(playerTileDOM);
        playerBoardDOM.appendChild(playerTileDOM);
        playerBoardDOM.appendChild(player1Cover);
        // computerTileDOM.addEventListener('click'computerBoardDOM.)
        computerBoardDOM.appendChild(computerTileDOM);
        computerBoardDOM.appendChild(player2Cover);
      }
    }
    displayShips(gameController.getPlayer1(), 1);
    displayShips(gameController.getPlayer2(), 2);
  };
};

UIController();
