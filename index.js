'use strict'

const through = require('through2');
const gutil = require('gulp-util');
const assign = require('object-assign');
const tempos = require('tempos/src');
const Buffer = require('safe-buffer').Buffer;

const PLUGIN_NAME = "gulp-tempos";

const gulpTempos = function(data, option) {

	data = data || {};
	option = option || {};

	return through.obj(function (file, enc, cb) {
		
		if( file.isNull() ) {
			this.push(file);
      		return cb();
		}

		if( file.isStream() ) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
		}

		data = assign({}, data, file.data);
		try {
			option.template = file.contents.toString();
			file.contents = new Buffer(
				tempos(null, data, option)
			);
			if( void 0 !== option.extname ) {
				file.path = gutil.replaceExtension(file.path, option.extname);
			}
		} catch(err) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, err.toString()));
		}

		this.push(file);
    	cb();
	});
};

module.exports = gulpTempos;