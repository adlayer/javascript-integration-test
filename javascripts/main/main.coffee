#= require ../yepnope.js

prefix = 'http://localhost/javascript-integration-test/'

yepnope 
	load: [
		prefix + 'templates/template.js',
		prefix + 'stylesheets/foundation.min.css',
		prefix + 'mocha.css',
		
		prefix + 'javascripts/jquery.js',
		prefix + 'javascripts/foundation.min.js',
		'https://raw.github.com/LearnBoost/expect.js/master/expect.js',
		'https://raw.github.com/visionmedia/mocha/master/mocha.js',
		prefix + 'javascripts/app.js',
		prefix + 'javascripts/main/setup.js',
		prefix + 'tests/page.js'
	]