let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');
    
    while (numberOfFilms == '' || 
    !numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');  
    }
}

start();

let personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        let filmGenre = prompt(`Ваш любимый жанр под номером ${i}`);

        if (filmGenre && filmGenre != '' && filmGenre.length < 50) {
        personalMovieDB.genres[i - 1] = filmGenre;
        } 
    }
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
            starsFilm= prompt('На сколько оцените его?', '');
        if (lastFilm && starsFilm && lastFilm != '' && starsFilm != '' && lastFilm.length < 50 && starsFilm.length < 3) {        
            personalMovieDB.movies[lastFilm] = starsFilm;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ("Вы классический зритель (:");
    } else if (personalMovieDB.count >= 30){
        alert ("Вы заядлый киноман!");
    } else {
        alert ("Произошла кака-то ошибка...");
    }
}

detectPersonalLevel(); 

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

ShowMyDB(personalMovieDB.privat);