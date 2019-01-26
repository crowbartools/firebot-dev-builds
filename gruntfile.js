module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './Firebot/resources',
                        src: ['**'],
                        dest: 'Firebot/dist/Firebot-win32-x64/resources/',
                        filter: 'isFile'
                    }

                ]
            }
        },
        zip_directories: {
            firebot: {
                files: [{
                    expand: true,
                    filter: 'isDirectory',
                    cwd: './Firebot/dist/',
                    src: ['*'],
                    dest: ''
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-zip-directories');

    grunt.registerTask('default', ['copy', 'zip_directories']);
};