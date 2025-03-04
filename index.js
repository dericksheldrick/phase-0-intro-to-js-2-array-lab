// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){

    cats.push("Ralph");
    console.log(cats[2]);
}

function destructivelyPrependCat(){
    
    cats.unshift("Bob");
    
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    cats.slice();
    let newCats = cats.slice();
    newCats.push("Broom")
    return newCats;
  
}
function prependCat(){
    cats.slice();
    let newestCats = cats.slice();
    newestCats.unshift("Arnold");

    return newestCats;
}
function removeLastCat(){
    cats.slice();
    let removeLastCat = cats.slice();
    removeLastCat.pop();

    return removeLastCat;

    // console.log(removeLastCat);
}
function removeFirstCat(){
    cats.slice();
    let removeFirstCat = cats.slice();
    removeFirstCat.shift();

    return removeFirstCat;
}








// append cat last name 