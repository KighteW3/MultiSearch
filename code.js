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

/* let changeTo = document.querySelector(".button-theme");

let validateChange = false;

changeTo.addEventListener("click", startProccess);

function startProccess() {} */

/* let modoActual = false;

let prueba = document.querySelector(".button-theme");

let prueba2 = document.querySelector(".button-theme");

prueba.addEventListener("click", themeValidate);

function themeValidate() {
    if (modoActual == false) {
        prueba2.addEventListener("click", changeToDark)
    } else if (modoActual == true) {
        prueba2.addEventListener("click", changeToLight);
    }
}


function changeToDark() {
    if (modoActual == false) {
        document.querySelector(".child-1").style = "color:#eee";
        document.querySelector(".child-2").style = "color:#666";
        document.querySelector(".viewport").style = "background:#333";
        document.querySelector(".next-search").style = "color:#eee";
        document.querySelector(".ethical-speech").style = "color:#eee";
        document.querySelector("#searchable").style = "background:#888; color:#eee";
        document.querySelector(".search-icon").style = "background:#888";
        modoActual = true;
    }
}

function changeToLight() {
    if (modoActual == true) {
        document.querySelector(".child-1").style = "color:#0a0";
        document.querySelector(".child-2").style = "color:#ee0";
        document.querySelector(".viewport").style = "background:#333";
        document.querySelector(".next-search").style = "color:#auto";
        document.querySelector(".ethical-speech").style = "color:#eee";
        document.querySelector("#searchable").style = "background:#888; color:#eee";
        document.querySelector(".search-icon").style = "background:#888";
        modoActual = false;
    }
} */