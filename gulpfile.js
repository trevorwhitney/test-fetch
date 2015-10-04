var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

var clean = require('gulp-rimraf');

gulp.task('clean', function () {
  return gulp.src('./dist/js/*.js')
    .pipe(clean());
});

/* JavaScript */
gulp.task('build', ['clean'], function () {
  return browserify()
    .transform(babelify)
    .require('./app.js', {entry: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    open: false
  });

  gulp.watch(['./js/*.js', './app.js'], ['build']);
});

gulp.task('default', ['serve']);
