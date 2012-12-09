// Generated by CoffeeScript 1.4.0
(function() {

  describe('Page', function() {
    it('O código da página deve estar inserido no html', function(done) {
      var scriptTag;
      scriptTag = document.getElementById('adlayerScript');
      expect(scriptTag).to.be.ok();
      return done();
    });
    it('Deve haver apenas um script no html', function(done) {
      var scriptTags;
      scriptTags = jQuery('#adlayerScript').length;
      expect(adlayer).to.be.ok();
      return done();
    });
    it('O código da página deve estar carregado', function(done) {
      expect(scriptTags.length).to.be(1);
      return done();
    });
    it('Script deve expor o id da página e site', function(done) {
      expect(adlayer.site).to.be.ok();
      expect(adlayer.page).to.be.ok();
      return done();
    });
    it('A página deve estar cadastrada no Adserver do Adlayer', function(done) {
      return adlayer.adserver.page(adlayer.page, function(err, res) {
        expect(res).to.be.ok();
        return done();
      });
    });
    it('Todos os espaços da página devem estar integrados', function(done) {
      return adlayer.adserver.page(adlayer.page, function(err, res) {
        expect(res).to.be.ok();
        return done();
      });
    });
    return it('Nenhum código de espaço deve ser duplicado', function(done) {
      expect(adlayer).to.be.ok();
      return done();
    });
  });

}).call(this);
