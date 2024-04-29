import createShip from "./ship";

const createGameBoard = (width, height) => {
  const ships = [];

  const board = [];
  for (let i = 0; i < height; i++) {
    board[i] = [];
    for (let j = 0; j < width; j++) {
      board[i][j] = null;
    }
  }

  ships.push(createShip(1));
  ships.push(createShip(1));
  ships.push(createShip(1));
  ships.push(createShip(1));

  ships.push(createShip(2));
  ships.push(createShip(2));
  ships.push(createShip(2));

  ships.push(createShip(3));
  ships.push(createShip(3));

  ships.push(createShip(4));

  function allSunk() {
    return ships.every((ship) => ship.isSunk());
  }
  function getLocations() {
    return board;
  }
  function getShips() {
    return ships;
  }

  function printBoard() {
    const displayBoard = [];
    for (let i = 0; i < height; i++) {
      displayBoard[i] = [];
      for (let j = 0; j < width; j++) {
        displayBoard[i][j] = " ";
      }
    }
    ships.forEach((ship, index) => {
      ship.locations.forEach((location) => {
        const x = location[0];
        const y = location[1];
        displayBoard[x][y] = index;
      });
    });
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        console.log("|", displayBoard[i][j]);
      }
      console.log("|\n");
    }
  }
  function receiveAttack(x, y) {
    if (board[x][y] !== null) {
      if (board[x][y] === "missed") return false;

      board[x][y].hit();
      return true;
    }
    board[x][y] = "missed";
    return false;
  }
  function checkCollision(x, y, direction, length) {
    let shipX = x;
    let shipY = y;
    for (let i = 0; i < length; i++) {
      if (shipX < 0 || shipY < 0 || shipX >= width || shipY >= height)
        return true;
      if (board[shipX][shipY] !== null) return true;
      shipX += direction[0];
      shipY += direction[1];
    }
    return false;
  }
  // DIRECTION:
  // NORTH: Y-1 [0,-1]
  // EAST: X+1 [1,0]
  // SOUT < 0
  // WEST: X-1 [-1,0]
  function placeShip(x, y, direction, ship) {
    let shipX = x;
    let shipY = y;
    if (checkCollision(x, y, direction, ship.length)) return -1;
    ship.getDirection().x = direction[0];
    ship.getDirection().y = direction[1];
    for (let i = 0; i < ship.length; i++) {
      board[shipX][shipY] = ship;
      ship.getLocations().push([shipX, shipY]);
      shipX += direction[0];
      shipY += direction[1];
    }
  }

  return {
    allSunk,
    receiveAttack,
    placeShip,
    getLocations,
    getShips,
    printBoard,
  };
};

export default createGameBoard;
