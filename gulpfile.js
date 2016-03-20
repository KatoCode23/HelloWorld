var gulp = require('gulp');
// var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
// var inject = require('gulp-inject');
// var clean = require('gulp-clean');
// var s3 = require("gulp-s3");
// var minifyCSS = require('gulp-minify-css');
// var args = require('yargs').argv;
// var gulpSequence = require('gulp-sequence');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var fs = require("fs");
// var resources = require('./resources.json');
// var shell = require('gulp-shell');
// var runSequence = require('run-sequence');
// var argv = require('yargs').argv;

// SERVER
gulp.task('server', function() {

	gulp.src('')
		.pipe(server({
			livereload: false,
			open: true
		}));
});

gulp.task('default', function(){
	console.log("HELLO WORLD!");
});