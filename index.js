
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
    drivers.push(name);
}

function destructivelyPrependDriver (name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver (name) {
    drivers.pop();
}

function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

function appendDriver (name) {
    return [... drivers, name]
}

function prependDriver (name) {
    return [name, ... drivers]
}

// calculatesFarePrice(50, 58)
function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver () {
    return drivers.slice(1)
}