describe 'Page', ->
	
	it 'Page code should be inserted', (done) ->
		scriptTag = document.getElementById('adlayerScript')
		expect(scriptTag).to.be.ok()
		done()
		
	it 'Page code should load and allow access to adlayer lib', (done) ->
		expect(adlayer).to.be.ok()
		done()
		


describe 'Connections', ->

	it 'Should be able to bring page data', (done) ->
		adlayer.page.getData (content) ->
			expect(content).to.be.ok()
			done()
			
	it 'Should be able to track an event', (done) ->
		data = 
			ad_id: 'random',
			campaign_id: 'random',
			space_id: 'random',
			page_url: 'http://www.random.com',
			site_id: 'random',
			page_id: 'random',
			do_not_tracke: true

		adlayer.track 'impression', data, ->
			done()


describe 'Spaces', ->
	
	it 'Should be able to find all spaces inserted in html', (done) ->
		adlayer.page.getData (content) ->
			
			errors = 0
			found = 0
			
			onSucess = (space) -> found++
			onError = (space) -> errors++
			
			adlayer.page.scan(onSucess, onError);
			expect(errors).to.be(0);
			expect(content.spaces.length).to.be.equal(found);
			done();