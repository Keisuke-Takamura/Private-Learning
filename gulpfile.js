var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer('last 2 version', 'ie8'))
	.pipe(gulp.dest('src/css/'));
});