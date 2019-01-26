module.exports = function (grunt) {
    grunt.initConfig({
        zip_directories: {
            files: [{
                filter: 'isDirectory',
                expand: true,
                cmd: './firebot/dist',
                src: ['*'],
                dest: './firebot'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-zip-directories');
};