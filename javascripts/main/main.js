// Generated by CoffeeScript 1.4.0
(function() {
  var prefix, template;

  prefix = window.prefix || 'http://integration.adlayerjavascriptsdk.com/';

  template = "<div id=\"mocha\">\n	<h1>\n		<img src=\"http://adlayer.com.br/img/logo.png\" />\n		<span>JS Integration Test</span>\n	</h1>\n</div>";

  yepnope({
    load: [prefix + 'stylesheets/mocha.css', prefix + 'javascripts/jquery.js', prefix + 'node_modules/expect.js/expect.js', prefix + 'node_modules/mocha/mocha.js', prefix + 'javascripts/main/setup.js', prefix + 'tests/spaces.js', prefix + 'tests/page.js'],
    complete: function() {
      return $(document).ready(function() {
        $('body').prepend(template);
        return mocha.run();
      });
    }
  });

}).call(this);
