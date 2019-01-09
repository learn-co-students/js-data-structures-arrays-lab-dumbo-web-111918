// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

// function appendDriver (name) {
//   let arr = drivers.slice(0)
//   return arr.push(name)
// }

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeLastDriver(name) {
    c = [...drivers]
    return c.slice(0,2)
}

function removeFirstDriver(name) {
    c = drivers.slice(1)
    return c
}



