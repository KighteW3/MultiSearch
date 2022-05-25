function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}

// let alberto = getRandomNumber(1,5);

// console.log(alberto);


let brave = getRandomNumber(1,4);
let dDG = getRandomNumber(1,4);
let qWant = getRandomNumber(1,4);
let metaG = getRandomNumber(1,4);
let randomizeS = getRandomNumber(1,4);

console.log(brave, dDG, qWant, metaG, randomizeS);

function formSubmit(){
    let content = document.getElementById("searchable").value;
    let brave = getRandomNumber(1,4);
    let dDG = getRandomNumber(1,4);
    let qWant = getRandomNumber(1,4);
    let metaG = getRandomNumber(1,4);
    let randomizeS = getRandomNumber(1,4);
    if (brave == randomizeS) {
        window.open(`https://search.brave.com/search?q=${content}`);
    }else if (randomizeS == dDG) {
        window.open(`https://duckduckgo.com/?q=${content}`);
    }else if (randomizeS == qWant) {
        window.open(`https://www.qwant.com/?q=${content}`);
    }else if (randomizeS == metaG) {
        window.open(`https://metager.es/meta/meta.ger3?eingabe=${content}&focus=web&s=&f=&ff=&ft=&m=`);
    }else{
        return formSubmit();
    }
}

