mocha.setup('bdd');
$(function () {
  $('body').prepend('<div id="mocha"></div>');
  mocha
    .run()
    .globals(['foo', 'bar','adlayer']) // acceptable globals
});