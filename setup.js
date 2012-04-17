mocha.setup('bdd');
jQuery(function () {
  jQuery('body').prepend('<div id="mocha"></div>');
  mocha
    .run()
    .globals(['foo', 'bar','adlayer']) // acceptable globals
});