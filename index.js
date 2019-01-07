// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift()
}

function appendDriver(name) {
    let thing = [...drivers, name]
    return thing
}

function prependDriver(name) {
    let thing = [name, ...drivers]
    return thing
}

function removeLastDriver(name) {
    let thing = drivers.slice(0,-1)
    return thing
}

function removeFirstDriver(name) {
    let thing = drivers.slice(1)
    return thing
}