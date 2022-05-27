const { src, dest, watch, series } = require('gulp');

const imagemin = require('gulp-imagemin');
const avif = require('gulp-avif');
const webp = require('gulp-webp');

function images(done){
    src('img/**/*.{png,jpg}')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
    done();
}

function imagesAvif(done){
    const opciones = {
        quality: 50
    }
    src('img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
    done();
}

function imagesWebp(done){
    const opciones = {
        quality: 50
    }
    src('img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function dev(done){
    watch('src/img/**/*', images);
    done();
}

exports.images = images;
exports.imagesAvif = imagesAvif;
exports.imagesWebp = imagesWebp;
exports.dev = dev;
exports.default = series(images, imagesAvif, imagesWebp, dev);