module.exports = function (grunt) {
  grunt.initConfig({
  sass: {
    options: {
      style: 'compressed'
    },                              // Task
    dist: {                            // Target
      files: {                         // Dictionary of files
        'build/main.css': 'style/style.sass'
      }
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};
