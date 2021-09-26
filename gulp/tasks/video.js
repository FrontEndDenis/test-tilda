const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');

const path 			= require('../path');

function video() {
	return gulp.src(path.input + 'static/video/**/*.*')
		.pipe(gulp.dest(path.output + 'static/video'))
		.pipe(browserSync.stream({ once: true }));
}

exports.video = video;