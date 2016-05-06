module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        'http-server': {

            'dev': {
                root: './',
                port: 8282
            }
        },

        watch : {
            dev : {
                files : [
                    'Gruntfile.js',
                    'public/app/*.js',
                    'public/app/**/*.js',
                    'public/app/**/*.html',
                    'public/styles/**/*.scss'
                ],
                tasks : [
                    'sass:dev',
                    'concat:dist',
                    'html2js',
                    'ngAnnotate',
                    'watch:dev'
                ],
                options : {
                    spawn : false
                }
            }
        },


        html2js : {
            main : {
                src : ['public/**/*.html'],
                dest : 'public/dist/templates.js'
            }
        },

        jshint : {
            all : [
                'Gruntfile.js',
                'public/app/*.js',
                'public/app/*/*.js'
            ]
        },

        jsdoc : {
            dist : {
                src : ['controllers/**/*.js'],
                options : {
                    destination : 'doc',
                    template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
                    configure : 'jsdoc.json'
                }
            }
        },

        concat : {
            options : {
                separator : ';'
            },
            dist : {
                src : [
                    'public/app/app.module.js',
                    'public/app/**/*.module.js',
                    'public/app/**/*.js'
                ],
                dest : 'public/dist/app.js'
            }
        },

        clean: {
            contents: ['public/dist']
        },

        sass : {
            dev : {
                files : [
                    {
                        src : ['**/*.scss', '!**/_*.scss'],
                        cwd : 'public/styles',
                        dest : 'public/dist/styles',
                        ext : '.css',
                        expand : true
                    }
                ],
                options : {
                    outputStyle : 'expanded',
                    sourceMap : true
                }
            }
        },

        ngAnnotate : {
            options : {
                singleQuotes: true
            },
            dev : {
                files : [
                    {
                        src : ['**/*.js'],
                        cwd : 'public/dist',
                        dest : 'public/dist',
                        expand : true
                    }
                ]
            }
        }
    });



    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dev', [
        'sass:dev',
        'concat:dist',
        'html2js',
        'clean',
        'ngAnnotate',
        'watch:dev'
    ]);

    grunt.registerTask('start', [
        'http-server:dev'
    ]);
};
