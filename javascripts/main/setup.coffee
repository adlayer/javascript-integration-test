mocha.setup 'bdd'
window.onload = () ->
	mocha.globals ['jQuery', 'adlayer']

$ ()->
	$('body').prepend adlayer_template
	
	$mocha = $ '#mocha'
	$btRun = $ '#mocha-run'
	
	reset = () ->
		$mocha.html '';
		$mocha.prepend $btRun;
	
	$('#mocha-run').live 'click', () ->
		reset()
		mocha.run()

	$('#adlayer_js_test .tabs a').click ()->
		$mocha.remove()
		target = $(this).attr('href') + 'Tab'
		$(target).html $mocha
		reset()