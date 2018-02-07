module.exports = {
    paths: {
        src: {
    		html: 'resources/assets/html/**/*',
    		fonts: 'resources/assets/fonts/**/*',
    		sass: 'resources/assets/scss/**/*.scss',
    		js: 'resources/assets/js/**/*.js',
    		image: 'resources/assets/images/**/*'
    	},
    	dest: {
    		html: 'resources/views/',
    		fonts: 'public/fonts/',
    		sass: 'public/css/',
    		js: 'public/js/',
    		image: 'public/images/',
    		beauty: {
    		  sass: 'public/css/beauty/'
    		}
    	}
    }
};