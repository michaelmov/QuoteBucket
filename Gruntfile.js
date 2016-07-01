module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        useminPrepare: {
            html: ['client/app.html'],
            options: {
                dest: 'dist/client'
            }
        },

        copy: {
            html: {
                src: 'client/*.html',
                dest:'dist/'
            },
            templates: {
                src: 'client/views/**',
                dest: 'dist/'
            },
            images: {
                src: 'client/img/**',
                dest: 'dist/'
            },
            fonts: {
                src: 'client/css/fonts/**',
                dest: 'dist/'
            },
            server: {
                src: 'server/**',
                dest: 'dist/'
            }
        },

        usemin: {
            html: ['dist/client/app.html']
        },

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

        webfont : {
            icons : {
                src : 'client/img/icons/*.svg',
                dest : 'client/css/fonts',
                destCss: 'client/css/base',
                options : {
                    relativeFontPath: 'fonts',
                    stylesheet : 'scss',
                    templateOptions : {
                        classPrefix : 'i-'
                    }
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
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');


    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('build', [
        'copy',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin'
    ]);

};