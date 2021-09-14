// const gulp = require('gulp'); // dat er geen TypeScript definitions voor zijn

import gulp from 'gulp'; // code use strict, code is gescheiden
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);


gulp.task('default', () => {
    return gulp.src('./demo/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./demo/dist'));
});

gulp.task('watch', () => {
    return gulp.watch('./demo/css/*.scss', gulp.series('default'));
});
