const drivers= ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

// function appendDriver(name){
//   let arr = drivers.slice(0)
//   return arr.push(name)
// }
function appendDriver(name){
	  const array = [...drivers, name];
	  return array;
	}

	function prependDriver(name){
	  const array = [name, ...drivers]
	  return array
	}

// function removeFirstDriver(){
//   let arr = drivers
//   arr.pop()
//   return arr
// }

function removeLastDriver(){
	  let array = drivers.slice(0, drivers.length - 1)
	  return array;
	}

function removeFirstDriver(){
  let array = drivers.slice(1)
  return array
}
