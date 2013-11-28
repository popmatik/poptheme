require.config({
	// "baseUrl": "wp-content/themes/popmatik/js",
	"baseUrl": "<%= userInput.contentDir %>/themes/<%= userInput.themeDir %>/js",
	"paths": {
		"jquery": "vendor/jquery/jquery"
	}
});

require(['jquery'], function($) {
	console.log('Working!!');
});
