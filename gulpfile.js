var gulp = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject-string');
var strip = require('gulp-strip-line');

gulp.task('build', function() {
  console.log("Concating and moving all the svg files into single export-svg-file index.svg");
  return gulp.src("./src/**/*.svg")
    .pipe(concat('index.svg'))
    .pipe(strip(['<svg>','</svg>']))
    .pipe(inject.prepend('<svg xmlns="http://www.w3.org/2000/svg">'))
    .pipe(inject.append('</svg>'))
    .pipe(gulp.dest('./src'));
});
