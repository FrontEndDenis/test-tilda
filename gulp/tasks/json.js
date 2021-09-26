const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');

const path 			= require('../path');

function json() {
	return gulp.src(path.input + 'static/js/json/**/*.json*')
		.pipe(gulp.dest(path.output + 'static/js/json'))
		.pipe(browserSync.stream({ once: true }));
}

exports.json = json;