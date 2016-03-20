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

	return gulp.src(['./scss/main.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
	gulp.watch(['./scss/**/*'], ['sass']);
});

gulp.task('default', ['sass', 'server', 'watch']);