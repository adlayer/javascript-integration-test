describe 'Page', ->
	
	it 'O código da página deve estar inserido no html', (done) ->
		scriptTag = document.getElementById('adlayerScript')
		expect(scriptTag).to.be.ok()
		done()
		
	it 'Deve haver apenas um script no html', (done) ->
		scriptTags = jQuery('#adlayerScript').length
		expect(adlayer).to.be.ok()
		done()
	
	it 'O código da página deve estar carregado', (done) ->
		expect(scriptTags.length).to.be(1)
		done()
		
	it 'Script deve expor o id da página e site', (done) ->
		expect(adlayer.site).to.be.ok()
		expect(adlayer.page).to.be.ok()
		done()
		
	it 'A página deve estar cadastrada no Adserver do Adlayer', (done) ->
		adlayer.adserver.page adlayer.page, (err, res)->
			expect(res).to.be.ok()
			done()
		
	it 'Todos os espaços da página devem estar integrados', (done) ->
		adlayer.adserver.page adlayer.page, (err, res)->
			expect(res).to.be.ok()
			done()
		
	it 'Nenhum código de espaço deve ser duplicado', (done) ->
		expect(adlayer).to.be.ok()
		done()
	