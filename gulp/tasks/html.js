const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const pug 			= require('gulp-pug');
const rename 		= require('gulp-rename');
// const htmlmin 		= require('gulp-htmlmin');
// const webpHTML 		= require('gulp-webp-html'); минимизурует HTML код, отключен временно

const path 			= require('../path');

function html() {
	return gulp.src(path.input + 'pug/*.pug')
		.pipe(pug({
			doctype: 'html',
			pretty: true
		}))
		.pipe(rename({ dirname: '' }))
		// .pipe(webpHTML())
		// .pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(path.output))
		.pipe(browserSync.stream({ once: true }));
}

exports.html = html;