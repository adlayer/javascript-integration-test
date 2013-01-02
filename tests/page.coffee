describe 'Page', ->
	
	it 'O código da página deve estar inserido no html', (done) ->
		$scriptTags = jQuery('#adlayerScript').get 0
		expect($scriptTags).to.be.ok()
		done()
		
	it 'Deve haver apenas um script no html', (done) ->
		scriptTags = jQuery('#adlayerScript')
		expect(scriptTags.length).to.be(1)
		done()
	
	it 'O código da página deve estar carregado', (done) ->
		expect(adlayer).to.be.ok()
		done()
		
	it 'Script deve expor o id da página e site', (done) ->
		scriptTag = document.getElementById 'adlayerScript'
		lib = adlayer.lib
		url = scriptTag.src.split '?'
		queryStr = url[1]
		query = lib.querystring.parse queryStr
		
		expect(query.site).to.be.ok()
		expect(query.page).to.be.ok()
		done()
		
	it 'A página deve estar cadastrada no Adserver do Adlayer', (done) ->
		query = {
			domain: window.location.hostname,
			site_id: adlayer.page.site_id
		}
		
		adlayer.adserver.pages adlayer.page.id, query, (err, res) ->
			expect(res).to.be.ok()
			done()
		
	it 'Todos os espaços da página devem estar integrados', (done) ->
		query = {
			domain: window.location.hostname,
			site_id: adlayer.page.site_id
		}
		
		adlayer.adserver.pages adlayer.page.id, query, (err, res) ->
			errors = 0;
			adlayer.page.scanSpaces res.spaces, (err, space) ->
				if err then errors++
			
			expect(errors).to.be 0
			done()
		
	it 'Nenhum código de espaço deve ser duplicado', (done) ->
		ids = {}
		duplicated = false
		
		jQuery('.adlayer_space').each ()->
			id = $(this).attr 'id'
			if ids[id] then duplicated = true else ids[id] = 1
			
		expect(duplicated).to.not.be.ok()
		done()