
let personalMovieDB =  {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '');
        
        while (personalMovieDB.count == '' || 
        !personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '');  
        }
    },

    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++) {
            let filmGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (filmGenre && filmGenre != '' && filmGenre.length < 50) {
            personalMovieDB.genres[i - 1] = filmGenre;
            } else {
                console.log("Значение не введено либо неверно");
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр №${i + 1} это ${item}`)
        });
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ("Вы классический зритель (:");
        } else if (personalMovieDB.count >= 30){
            alert ("Вы заядлый киноман!");
        } else {
            alert ("Произошла кака-то ошибка...");
        }
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else
        personalMovieDB.privat = true;
    },

    ShowMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};