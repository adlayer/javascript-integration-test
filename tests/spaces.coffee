describe 'Spaces', ->
	
	it 'Não devem haver espaços globais duplicados', () ->
		$spaces = $ '.adlayer_global_space'
		ids = {}
		
		$spaces.each ->
			ids[this.id] = ids[this.id] || 0
			ids[this.id]++

			## Espera que ja não exista um id intepretado
			expect(ids[this.id]).to.be(1)