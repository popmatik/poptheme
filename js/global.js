require.config({
	"baseUrl": "<%= conf.contentDir %>/themes/<%= conf.themeDir %>/js",
	"paths": {
		"jquery": "vendor/jquery/jquery"
	}
});

require(['jquery'], function($) {
	console.log('Working!!');
});
