import * as gulp from 'gulp';

const postcss = require('gulp-postcss')
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

// build css
gulp.task('build:css', (callback) => {
  gulp.src('./src/css/index.css')
    .pipe(plumber())
    .pipe(postcss())
    .pipe(gulp.dest('./public'));
  callback();
});

// build js
gulp.task('build:js', (callback) => {
  gulp.src('./src/js/index.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./public'));
  callback();
});

// build images
gulp.task('build:image', (callback) => {
  gulp.src('./src/image/*')
    .pipe(plumber())
    .pipe(imagemin([
      imageminWebp()
    ]))
    .pipe(rename({ extname: '.webp' }))
    .pipe(gulp.dest('./public/image'));
  callback();
});

// build all
gulp.task('build', gulp.parallel(
  'build:css',
  'build:js',
  'build:image',
));


gulp.task('watch:css', (callback) => {
  return gulp.watch('src/**/*.css', gulp.series('build:css'));
});

gulp.task('watch:js', (callback) => {
  return gulp.watch('src/**/*.js', gulp.series('build:js'));
});

gulp.task('watch', gulp.parallel(
  'watch:css',
  'watch:js'
));
