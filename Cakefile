Snockets = require 'snockets'
snockets = new Snockets()
fs = require 'fs'
jade = require 'jade'


task 'build', 'build the project', (options) ->
	fs.readFile 'templates/content.jade', (err, file) =>
		render = jade.compile  file.toString(), {}
		content = 'var adlayer_template = \'' + render() + '\''
		
		fs.writeFile 'templates/template.js', content, (err, file) ->
			console.log 'end template'
	
	snockets.getConcatenation 'javascripts/main/main.coffee', minify:true, async: false, (err, js) ->		
		fs.writeFile 'main.js', js, (err, res) ->
		console.log 'end concatenation'