var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
// var args = require('yargs').argv;
// var runSequence = require('run-sequence');

// SERVER
gulp.task('server', function() {

	gulp.src('')
		.pipe(server({
			livereload: false,
			open: true
		}));
});

gulp.task('sass', function(cb){

	return gulp.src(['./styles.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'server']);