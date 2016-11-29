"use strict";
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    typescript = require('gulp-typescript'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    es = require('event-stream'),
    runSequence = require('run-sequence'),
    bower = require('bower');

const tscConfig = require('./tsconfig.json');

var paths = {
    srcTs: ['./src/**/*.ts'],
    srcHtml: ['./src/**/*.html'],
    srcJs: ['./src/**/*.js'],
    srcJSON: ['./src/**/*.json'],
    dest: 'www/',
    srcSass: ['./src/**/*.scss']
};

gulp.task('compile-ts', function () {
    gulp.src(paths.srcTs)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('compile-sass', function (done) {
    gulp.src(paths.srcSass)
        .pipe(sass())
        .on('error', sass.logError)
        // .pipe(gulp.dest(paths.dest))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.dest))
        .on('end', done);
});

gulp.task('copy', function() {
    gutil.log('copying html and js files');
    return es.concat (
        gulp.src(paths.srcHtml)
            .pipe(gulp.dest(paths.dest)),
        gulp.src(paths.srcJs)
            .pipe(gulp.dest(paths.dest)),
        gulp.src(paths.srcJSON)
            .pipe(gulp.dest(paths.dest))
    )
});

gulp.task('bower_install', function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('default', function () {
    runSequence(
        'bower_install',
        'compile-ts',
        'copy',
        'compile-sass'
    )
});