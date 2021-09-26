const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');
const webpack 		= require('webpack-stream');
const pathSrc 		= require('path');

const path 			= require('../path');

function jsDev() {
	return gulp.src(path.input + 'static/js/**/*.js')
		.pipe(webpack({
			mode: 'development',
			devtool: 'inline-source-map',
			context: pathSrc.resolve(__dirname, '../../dev/static/js/'),
			entry: {
				script: ['@babel/polyfill', './script.js']
			},
			output: {
				filename: '[name].js',
			},
			module: {
				rules: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					}
				]
			}
		}))
		.pipe(gulp.dest(path.output + 'static/js'))
		.pipe(browserSync.stream({once: true}));
}

function jsBuild() {
	return gulp.src(path.input + 'static/js/*.js')
		.pipe(webpack({
			mode: 'production',
			context: pathSrc.resolve(__dirname, '../../dev/static/js/'),
			entry: {
				script: ['@babel/polyfill', './script.js']
			},
			output: {
				filename: '[name].js'
			},
			module: {
				rules: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					}
				]
			}
		}))
		.pipe(gulp.dest(path.output + 'static/js'));
}

exports.jsDev = jsDev;
exports.jsBuild = jsBuild;