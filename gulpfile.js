/**
 * Created by админ on 08.06.2016.
 */
'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        js: 'app/js/'
    },
    src: { //Пути откуда брать исходники
        js: 'js/**/*.js' //все файлы с расширением .js в директории js и всех дочерних директориях
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        js: 'src/js/**/*.js'
    }
};

//gulp.src(['!js/base.js','!js/main.js']);

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build
});

gulp.task('build', [
    'js:build'
]);

//gulp.task('watch', function(){
//    watch([path.watch.js], function(event, cb) {
//        gulp.start('js:build');
//    });
//});

gulp.task('default', ['build']);