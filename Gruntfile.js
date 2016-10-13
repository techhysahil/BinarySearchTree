module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');
    // Project configuration.
    grunt.initConfig({
        pkg: pkg,
        uglify: {
            my_target: {
              files: {
                'dest/BST.min.js': ['BST.js']
              }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Custom task
    grunt.registerTask('build', ['uglify']);

};