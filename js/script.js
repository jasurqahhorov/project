"use strict"

// const numberOffFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOffFilms,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('Ko`p');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = '190';

// switch (num) {
//     case '49':
//         console.log('Notog`ri');
//         break;
//     case '100':
//         console.log('Notog`ri');
//         break;
//     case '50':
//         console.log('To`g`ri');
//         break;
//     default:
//         console.log('Bu safar emas!');
//         break;
// }

// const hamburger = 5;
// const fries = null ;

// if (hamburger && fries) {
//     console.log('Men ochman!');
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
//     console.log('Hamma mamnun!');
// } else {
//     console.log('Biz ketamiz!');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!1);

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue
//     }
//     console.log(i);
// }
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Salom Jasur Qahhorov!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 10));
// console.log(calc(55, 10));
// console.log(calc(51, 10));

// const logger = function () {
//     console.log("Hello ")
// };

// logger();



// const calc = (a, b) => {
//     return a + b;
// };

// console.log(calc(3, 5));


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return
//     curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('OMG');
// }

// test();

// function doNothing() { };
// console.log(doNothing() === undefined);


// const str = 'teSt';

// console.log(str[2] = 'd');

// console.log(str.toLocaleLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.7;
// console.log(Math.round(num));

// const test = "12.8px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Anchagina kam kinolar ko'rildi");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Siz ajoyib tomoshabinsiz');
    } else if (personalMovieDB.count >= 30) {
        console.log('Siz kino manyakisiz');
    } else {
        console.log('Xatolik yuz berdi')
    }
}

// detectPersonalLevel();

// console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Sizning sevimli janringiz? ${i}`);
    }
}

writeYourGenres();


