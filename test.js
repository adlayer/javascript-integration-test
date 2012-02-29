(function() {

  describe('Page', function() {
    it('Page code should be inserted', function(done) {
      var scriptTag;
      scriptTag = document.getElementById('adlayerScript');
      expect(scriptTag).to.be.ok();
      return done();
    });
    return it('Page code should load and allow access to adlayer lib', function(done) {
      expect(adlayer).to.be.ok();
      return done();
    });
  });

  describe('Connections', function() {
    it('Should be able to bring page data', function(done) {
      return adlayer.page.getData(function(content) {
        expect(content).to.be.ok();
        return done();
      });
    });
    return it('Should be able to track an event', function(done) {
      var data;
      data = {
        ad_id: 'random',
        campaign_id: 'random',
        space_id: 'random',
        page_url: 'http://www.random.com',
        site_id: 'random',
        page_id: 'random'
      };
      return adlayer.track('impression', data, function() {
        return done();
      });
    });
  });

  describe('Spaces', function() {
    return it('Should be able to find all spaces inserted in html', function(done) {
      return adlayer.page.getData(function(content) {
        var errors, found, onError, onSucess;
        errors = 0;
        found = 0;
        onSucess = function(space) {
          return found++;
        };
        onError = function(space) {
          return errors++;
        };
        adlayer.page.scan(onSucess, onError);
        expect(errors).to.be(0);
        expect(content.spaces.length).to.be.equal(found);
        return done();
      });
    });
  });

}).call(this);
