const gulp 				= require('gulp');

const { html } 			= require('./html');
const { cssDev } 		= require('./css');
const { jsDev } 		= require('./js');
const { imgDev, svg, sprite } 	= require('./img');
const { fontsDev } 		= require('./fonts');
const { video } 		= require('./video');
const { json } 			= require('./json');

const path 				= require('../path');

function watch() {
	gulp.watch(path.input + 'pug/**/*.pug', gulp.series(html));
	gulp.watch([path.input + 'static/styles/**/*.scss', path.input + 'pug/**/*.scss'], gulp.series(cssDev));
	gulp.watch(path.input + 'static/js/**/*.js', gulp.series(jsDev));
	gulp.watch(path.input + 'static/images/**/*.*', gulp.parallel(imgDev, svg, sprite));
	gulp.watch(path.input + 'static/fonts/**/*.*', gulp.series(fontsDev));
	gulp.watch(path.input + 'static/video/**/*.*', gulp.series(video));
	gulp.watch(path.input + 'static/js/json/**/*.*', gulp.series(json));
}

exports.watch = watch;