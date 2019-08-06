var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name) 
  return Array
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return Array
}

function appendKitten(name) {
 return [... kittens, name] }
 