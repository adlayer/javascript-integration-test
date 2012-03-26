var css = {
	mocha: "https://raw.github.com/visionmedia/mocha/master/mocha.css"
};

var scripts = {
	jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
	expect: "https://raw.github.com/LearnBoost/expect.js/master/expect.js",
	mocha: "https://raw.github.com/visionmedia/mocha/master/mocha.js",
	setup: "setup.js",
	test: "test.js"
}

head.js(scripts.jquery, scripts.expect, scripts.mocha, scripts.setup, scripts.test);
