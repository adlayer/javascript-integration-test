#= require ../yepnope.js

prefix = window.prefix || 'http://integration.adlayerjavascriptsdk.com/'

template = """
			<div id="mocha">
				<h1>
					<img src="http://adlayer.com.br/img/logo.png" />
					<span>JS Integration Test</span>
				</h1>
			</div>
		   """

yepnope 
	load: [
		prefix + 'stylesheets/mocha.css',
		prefix + 'javascripts/jquery.js',
		prefix + 'node_modules/expect.js/expect.js',
		prefix + 'node_modules/mocha/mocha.js',
		prefix + 'javascripts/main/setup.js',
		prefix + 'tests/spaces.js',
		prefix + 'tests/page.js'
	],
	complete: () ->
		$(document).ready () ->
			$('body').prepend template
			mocha.run()