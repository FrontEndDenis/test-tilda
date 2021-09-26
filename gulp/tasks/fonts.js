const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const ttf2eot 		= require('gulp-ttf2eot');
const ttf2woff 		= require('gulp-ttf2woff');
const ttf2woff2 	= require('gulp-ttf2woff2');

const path 			= require('../path');

function fontsDev() {
	return gulp.src(path.input + 'static/fonts/**/*.ttf*')
		.pipe(gulp.dest(path.output + 'static/fonts'))
		.pipe(browserSync.stream({ once: true }));
}

function fontsBuild() {
	return gulp.src(path.input + 'static/fonts/**/*.ttf*')
		.pipe(ttf2eot({ clone: true }))
		.pipe(ttf2woff({ clone: true }))
		.pipe(ttf2woff2({ clone: true }))
		.pipe(gulp.dest(path.output + 'static/fonts'))
		.pipe(browserSync.stream({ once: true }));
}

exports.fontsDev = fontsDev;
exports.fontsBuild = fontsBuild;