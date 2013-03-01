Snockets = require 'snockets'
snockets = new Snockets()
fs = require 'fs'

task 'build', 'build the project', (options) ->
	snockets.getConcatenation 'javascripts/main/main.coffee', minify:false, async: false, (err, js) ->		
		fs.writeFile 'main.js', js, (err, res) ->
		console.log 'end concatenation'