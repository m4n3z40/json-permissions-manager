const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const changed = require('gulp-changed');
const newer = require('gulp-newer');
const runSequence = require('run-sequence');
const run = require('gulp-run');
const electronConnect = require('electron-connect');
const _ = require('lodash');
const { paths, buildPaths } = require('./src/config/build');

gulp.task('clean', () => del([buildPaths.root]));

gulp.task('main-scripts', (() => {
    const mainTSProject = ts.createProject(paths.main.tsconfig);

    return () => mainTSProject.src()
        .pipe(mainTSProject())
        .js.pipe(gulp.dest(buildPaths.main.scripts));
})());

gulp.task('watch:main-scripts', ['main-scripts'], () => {
    return gulp.watch(paths.main.scripts, ['main-scripts']);
});

function createUIScriptsBundler() {
    return browserify({
        basedir: '.',
        entries: [paths.ui.scriptsEntrypoint],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify, {project: paths.ui.tsconfig});
}

function bundleUIScripts(browserifyBundler) {
    const outFileName = paths.ui.scriptsEntrypoint.split('/').pop().replace('.ts', '.js');

    return browserifyBundler
        .bundle()
        .pipe(source(outFileName))
        .pipe(gulp.dest(buildPaths.ui.scripts));
}

gulp.task('ui-scripts', _.flow(createUIScriptsBundler, bundleUIScripts));

gulp.task('watch:ui-scripts', ['ui-scripts'], (() => {
    const watchedBrowserify = watchify(createUIScriptsBundler());
    const bundle = _.partial(bundleUIScripts, watchedBrowserify);

    watchedBrowserify.on('update', bundle);
    watchedBrowserify.on('log', gutil.log);

    return bundle;
})());

gulp.task('ui-styles', () => {
    return gulp.src(paths.ui.stylesEntrypoint)
        .pipe(sass({outputStyle: 'extended'}).on('error', sass.logError))
        .pipe(gulp.dest(buildPaths.ui.styles));
});

gulp.task('watch:ui-styles', ['ui-styles'], () => {
    return gulp.watch(paths.ui.styles, ['ui-styles']);
});

gulp.task('ui-pages', (() => {
    const uiSASSRelPath = paths.ui.stylesEntrypoint.replace(`${paths.ui.root}/`, '');
    const uiCSSRelPath = uiSASSRelPath.replace('styles', 'css').replace('.scss', '.css');
    const uiTSRelPath = paths.ui.scriptsEntrypoint.replace(`${paths.ui.root}/`, '');
    const uiJSRelPath = uiTSRelPath.replace('scripts', 'js').replace('.ts', '.js');

    return () => gulp.src(paths.ui.pages)
        .pipe(changed(buildPaths.ui.pages))
        .pipe(replace(uiSASSRelPath, uiCSSRelPath))
        .pipe(replace(uiTSRelPath, uiJSRelPath))
        .pipe(gulp.dest(buildPaths.ui.pages));
})());

gulp.task('watch:ui-pages', ['ui-pages'], () => {
    return gulp.watch(paths.ui.pages, ['ui-pages']);
});

gulp.task('ui-images', () => {
    return gulp.src(paths.ui.images)
        .pipe(newer(buildPaths.ui.images))
        .pipe(gulp.dest(buildPaths.ui.images));
});

gulp.task('watch:ui-images', ['ui-images'], () => {
    return gulp.watch(paths.ui.images, ['ui-images']);
});

gulp.task('ui-fonts', () => {
    return gulp.src(paths.ui.fonts)
        .pipe(newer(buildPaths.ui.fonts))
        .pipe(gulp.dest(buildPaths.ui.fonts));
});

gulp.task('watch:ui-fonts', ['ui-fonts'], () => {
    return gulp.watch(paths.ui.fonts, ['ui-fonts']);
});

gulp.task('build', done => runSequence(
    'clean',
    [
        'main-scripts',
        'ui-scripts',
        'ui-styles',
        'ui-pages',
        'ui-images',
        'ui-fonts'
    ],
    done
));

gulp.task('watch', done => runSequence(
    'clean',
    [
        'watch:main-scripts',
        'watch:ui-scripts',
        'watch:ui-styles',
        'watch:ui-pages',
        'watch:ui-images',
        'watch:ui-fonts'
    ],
    done
));

gulp.task('run', () => run('electron .').exec());

gulp.task('watch-and-run', ['watch'], (() => {
    const electron = electronConnect.server.create({stopOnClose: true});

    return () => {
        electron.start();

        gulp.watch(paths.main.scripts, electron.restart);
        gulp.watch([
            paths.ui.scripts,
            paths.ui.styles,
            paths.ui.pages,
            paths.ui.images,
            paths.ui.fonts
        ], electron.reload);
    };
})());

gulp.task('default', ['build']);
