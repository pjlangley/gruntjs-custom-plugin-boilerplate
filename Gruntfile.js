'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    custom_plugin: {
      options: {
        before: 'Hi, ',
        content: 'Peter',
        after: '!!!'
      }
    }

  });

  // Load the custom plugin's task
  grunt.loadNpmTasks('grunt-custom-plugin');

};