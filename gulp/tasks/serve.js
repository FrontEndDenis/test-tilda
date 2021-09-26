const browserSync 	= require('browser-sync');

const path 			= require('../path');

function serve() {
	browserSync.init({
		server: { baseDir: path.output },
		online: true,
		tunnel: 'private-url'
	});
}

exports.serve = serve;