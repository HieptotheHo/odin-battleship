import createGameBoard from "./gameBoard";

const createPlayer = () => {
  const gameBoard = createGameBoard();

  function getBoard() {
    return gameBoard;
  }

  return { getBoard };
};

export default createPlayer;
