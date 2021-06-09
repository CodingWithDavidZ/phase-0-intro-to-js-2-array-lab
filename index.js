const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const catsNew = [...cats, name];
    return catsNew;
}

function prependCat(name){
    const catsNew2 = [name, ...cats];
    return catsNew2;
}

function removeLastCat(name) {
    const removedLastCat = cats.slice(0, cats.length -1);
    return removedLastCat
}

function removeFirstCat(name) {
    const removedFirstCat = cats.slice(1);
    return removedFirstCat
}