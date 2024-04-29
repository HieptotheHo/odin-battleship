const createShip = (length) => {
  let hitTimes = 0;
  let sunk = false;
  const hit = () => {
    hitTimes += 1;
    if (hitTimes === length) sunk = true;
  };
  const isSunk = () => sunk;
  const direction = {};
  const locations = [];

  const getHitTimes = () => hitTimes;
  const getDirection = () => direction;
  const getLocations = () => locations;
  return {
    length,
    getDirection,
    getHitTimes,
    getLocations,
    hit,
    isSunk,
  };
};

export default createShip;
