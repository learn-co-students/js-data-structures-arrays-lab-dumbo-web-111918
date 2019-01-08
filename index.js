// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name)
};

function destructivelyPrependDriver(name){
  drivers.unshift(name)
};

function destructivelyRemoveLastDriver(){
  drivers.pop()
};

function destructivelyRemoveFirstDriver(){
  drivers.shift()
};

function appendDriver(name){
  const drivers2 = drivers.concat(name)
  return drivers2
};

function prependDriver(name){
  return [name, ...drivers]
};

function removeLastDriver(){
  return drivers.slice(0,2)
};

function removeFirstDriver(){
  return drivers.slice(1,3)
};
