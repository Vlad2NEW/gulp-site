const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');


gulp.task('scss', function() {
  return gulp.src('src/styles/**/*.scss')  
    .pipe(sass().on('error', sass.logError)) 
    .pipe(gulp.dest('build/styles'));
});

gulp.task('js', function() {
  return gulp.src('src/scripts/**/*.js') 
    .pipe(babel())                        
    .pipe(gulp.dest('build/scripts'));  
});

gulp.task('watcher', function() {
  gulp.watch('src/styles/**/*.scss', gulp.series('scss'));
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
});