function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}

function letRandomize(){
    brave = getRandomNumber(1,4);
    dDG = getRandomNumber(1,4);
    qWant = getRandomNumber(1,4);
    metaG = getRandomNumber(1,4);
    randomizeS = getRandomNumber(1,4);
}

function letRandomizeIt() {
    letRandomize();
    searchObject = [brave, dDG, qWant, metaG, randomizeS];
}

function randomizeValidate() {
    letRandomizeIt();
    if (searchObject[getRandomNumber(0,3)] == searchObject[4]){
        return searchObject;
    } else if (searchObject[getRandomNumber(0,3)] == searchObject[4]) {
        return searchObject;
    } else if (searchObject[getRandomNumber(0,3)] == searchObject[4]){
        return searchObject;
    } else if (searchObject[getRandomNumber(0,3)] == searchObject[4]) {
        return searchObject;
    } else {
        randomizeValidate();
    }
}

randomizeValidate();

function nextSearch() {
    if (searchObject[0] == searchObject[4]) {
        let braveN = "Brave";
        document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${braveN}`;
    }else if (searchObject[4] == searchObject[1]) {
        let dDGN = "Duckduckgo";
        document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${dDGN}`;
    }else if (searchObject[4] == searchObject[2]) {
        let qWantN = "Qwant";
        document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${qWantN}`;
    }else if (searchObject[4] == searchObject[3]) {
        let metaGN = "Metager";
        document.querySelector(".next-search").innerHTML = `Your next search will be redirected to: ${metaGN}`;
    }else {
        randomizeBucle();
    }
}

nextSearch();


function formSubmit(){
    let content = document.getElementById("searchable").value;
    if (searchObject[0] == searchObject[4]) {
        window.open(`https://search.brave.com/search?q=${content}`);
    }else if (searchObject[4] == searchObject[1]) {
        window.open(`https://duckduckgo.com/?q=${content}`);
    }else if (searchObject[4] == searchObject[2]) {
        window.open(`https://www.qwant.com/?q=${content}`);
    }else if (searchObject[4] == searchObject[3]) {
        window.open(`https://metager.es/meta/meta.ger3?eingabe=${content}&focus=web&s=&f=&ff=&ft=&m=`);
    }else{
        randomizeBucle();
    }
}