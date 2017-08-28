﻿﻿/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.task.loadTasks('tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        jshint: {
            all: [
              'Gruntfile.js',
              'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });
};