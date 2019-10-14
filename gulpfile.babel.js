import * as gulp from 'gulp';

const postcss = require('gulp-postcss')
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

// build css
gulp.task('build:css', (callback) => {
  gulp.src('./src/css/index.css')
    .pipe(postcss())
    .pipe(gulp.dest('./public'));
  callback();
});

// build js
gulp.task('build:js', (callback) => {
  gulp.src('./src/js/index.js')
    .pipe(babel())
    .pipe(gulp.dest('./public'));
  callback();
});

// build images
gulp.task('build:image', (callback) => {
  gulp.src('./src/image/*')
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
    ]))
    .pipe(gulp.dest('./public/image'));
  callback();
});

// build all
gulp.task('build', gulp.parallel(
  'build:css',
  'build:js',
  'build:image',
));
