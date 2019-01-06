// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  const newDriversArray = [...drivers];
  newDriversArray.push(name);
  return newDriversArray;
}

function prependDriver(name) {
  const prepDriver = [...drivers];
  prepDriver.splice(0, 0, name);
  return prepDriver;
}

function removeLastDriver(name) {
  const removedDriver = [...drivers]
  removedDriver.splice(-1);
  return removedDriver;
}

function removeFirstDriver(name) {
  const firstDriver = [...drivers];
  firstDriver.splice(0, 1);
  return firstDriver;
}
