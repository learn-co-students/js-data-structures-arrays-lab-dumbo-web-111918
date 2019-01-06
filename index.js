// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

destructivelyAppendDriver("Ralph");
destructivelyRemoveLastDriver();
destructivelyPrependDriver("Bob");
destructivelyRemoveFirstDriver();
appendDriver("Broom");
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();

function destructivelyAppendDriver(name) {
  drivers.push(name);
}


function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}


function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  const anotherNewDriver = [name, ...drivers];
  return anotherNewDriver;
}

function removeLastDriver() {
    const removeDriver = [...drivers.slice(0,2)];
    return removeDriver;
}

function removeFirstDriver() {
    const firstDriverRemoved = [...drivers.slice(1)];
    return firstDriverRemoved;
}
