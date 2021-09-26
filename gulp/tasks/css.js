const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const sass 			= require('gulp-sass');
const sourcemaps 	= require('gulp-sourcemaps');
const minifyCSS		= require('gulp-minify-css');
const postcss 		= require('gulp-postcss');
const autoprefixer 	= require('autoprefixer');
const gcmq 			= require('gulp-group-css-media-queries');
// const webpcss 		= require('gulp-webp-css'); не работает, отключен временно

sass.compiler 		= require('node-sass');

const path 			= require('../path');

function cssDev() {
	return gulp.src(path.input + 'static/styles/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(postcss([ autoprefixer() ]))
		// .pipe(webpcss())
		.pipe(gcmq())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.output + 'static/css'))
		.pipe(browserSync.stream({once: true}));
}

function cssBuild() {
	return gulp.src(path.input + 'static/styles/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(postcss([ autoprefixer() ]))
		// .pipe(webpcss())
		.pipe(gcmq())
		.pipe(minifyCSS())
		.pipe(gulp.dest(path.output + 'static/css'));
}

exports.cssDev = cssDev;
exports.cssBuild = cssBuild;