'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task('image', () =>
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('sass', function () {
    return gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

//Watch tasks
gulp.task('watch', function () {
    gulp.watch('*.scss', ['sass']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('images/*', ['image']);
});

gulp.task('default', ['minify-css', 'sass', 'image']);
