function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}

// let alberto = getRandomNumber(1,5);

// console.log(alberto);

function noNext() {
    document.querySelector(".next-search-container").style.display = "none";
}


let brave = getRandomNumber(1,4);
let dDG = getRandomNumber(1,4);
let qWant = getRandomNumber(1,4);
let metaG = getRandomNumber(1,4);
let randomizeS = getRandomNumber(1,4);

console.log(brave, dDG, qWant, metaG, randomizeS);

if (brave == randomizeS) {
    let braveN = "Brave";
    document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${braveN}`;
}else if (randomizeS == dDG) {
    let dDGN = "Duckduckgo";
    document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${dDGN}`;
}else if (randomizeS == qWant) {
    let qWantN = "Qwant";
    document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${qWantN}`;
}else if (randomizeS == metaG) {
    let metaGN = "Metager";
    document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${metaGN}`;
}else {
    noNext();
}


function formSubmit(){
    let content = document.getElementById("searchable").value;
    if (brave == randomizeS) {
        window.open(`https://search.brave.com/search?q=${content}`);
    }else if (randomizeS == dDG) {
        window.open(`https://duckduckgo.com/?q=${content}`);
    }else if (randomizeS == qWant) {
        window.open(`https://www.qwant.com/?q=${content}`);
    }else if (randomizeS == metaG) {
        window.open(`https://metager.es/meta/meta.ger3?eingabe=${content}&focus=web&s=&f=&ff=&ft=&m=`);
    }else{
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
}

