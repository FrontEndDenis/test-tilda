const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const svgSprite 	= require('gulp-svg-sprite');
const imagemin 		= require('gulp-imagemin');
const webp 			= require('gulp-webp');
const imjr 			= require('imagemin-jpeg-recompress');
const pngquant 		= require('imagemin-pngquant');

const path 			= require('../path');

let srcImage = {
	img: path.input + 'static/images/**/*.{jpg,png,svg,gif,ico,webp}',
	svg: path.input + 'static/images/svg/general/*.svg',
	sprite: path.input + 'static/images/svg/sprite/*.svg'
}

function imgDev() {
	return gulp.src([
		srcImage.img,
		`!${srcImage.svg}`,
		`!${srcImage.sprite}`
	])
	.pipe(gulp.dest(path.output + 'static/images'))
	.pipe(webp({ quality: 80 }))
	.pipe(gulp.dest(path.output + 'static/images'))
	.pipe(browserSync.stream({ once: true }));
}

function imgBuild() {
	return gulp.src([
		srcImage.img,
		`!${srcImage.svg}`,
		`!${srcImage.sprite}`
	])
	.pipe(imagemin([
		imagemin.gifsicle({ interlaced: true }),
		imagemin.mozjpeg({ quality: 80, progressive: true }),
		imagemin.optipng({ optimizationLevel: 3 }),
		imagemin.svgo({
			plugins: [
				{ removeViewBox: true },
				{ cleanupIDs: false }
			]
		}),
		imjr({
			loops: 5,
			min: 70,
			max: 80,
			quality: 'high'
		}),
		pngquant({
			quality: [0.70, 0.80],
			speed: 5
		}),
	]))
	.pipe(gulp.dest(path.output + 'static/images'))
	.pipe(webp({ quality: 80 }))
	.pipe(gulp.dest(path.output + 'static/images'));
}

function svg() {
	return gulp.src(srcImage.svg)
	.pipe(gulp.dest(path.output + 'static/images/svg/general'))
	.pipe(browserSync.stream({ once: true }));
}

function sprite() {
	return gulp.src(srcImage.sprite)
	.pipe(imagemin([
		imagemin.svgo({
			plugins: [
				{ removeViewBox: true },
				{ cleanupIDs: false },
				{ removeAttrs: { attrs: '(stroke|fill)' } }
			]
		})
	]))
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: 'sprite.svg'
			}
		}
	}))
	.pipe(gulp.dest(path.output + 'static/images/svg'))
	.pipe(browserSync.stream({ once: true }));
}

exports.imgDev = imgDev;
exports.imgBuild = imgBuild;
exports.svg = svg;
exports.sprite = sprite;