const gulp = require('gulp')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')

// build html
gulp.task('build:html', (callback) => {
  gulp
    .src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
  callback()
})

// build css
gulp.task('build:css', (callback) => {
  gulp
    .src('./src/css/index.css')
    .pipe(plumber())
    .pipe(postcss())
    .pipe(gulp.dest('./build/public'))
  callback()
})

// build js
gulp.task('build:js', (callback) => {
  gulp
    .src('./src/js/index.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./build/public'))
  callback()
})

// build images
gulp.task('build:image', (callback) => {
  gulp
    .src('./src/image/*')
    .pipe(plumber())
    .pipe(imagemin([imagemin.mozjpeg({ quality: 75, progressive: true })]))
    .pipe(gulp.dest('./build/public/image'))
  callback()
})

// build all
gulp.task(
  'build',
  gulp.parallel('build:html', 'build:css', 'build:js', 'build:image')
)

gulp.task('watch:html', (callback) => {
  return gulp.watch('index.html', gulp.series('build:html'))
})

gulp.task('watch:css', (callback) => {
  return gulp.watch('src/**/*.css', gulp.series('build:css'))
})

gulp.task('watch:js', (callback) => {
  return gulp.watch('src/**/*.js', gulp.series('build:js'))
})

gulp.task('watch', gulp.parallel('watch:html', 'watch:css', 'watch:js'))
