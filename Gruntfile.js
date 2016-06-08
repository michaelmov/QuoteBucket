module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/css/main.css': 'client/css/main.scss'
                }
            }
        },

        watch: {
            scss: {
                files : ['client/css/**/*.scss'],
                tasks : ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('compile-css', ['sass']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('default', ['sass']);

};