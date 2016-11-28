const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const { paths, buildPaths } = require('./src/config/build');

gulp.task('clean', () => del([buildPaths.root]));

gulp.task('main-scripts', ['clean'], (() => {
    const mainTSProject = ts.createProject(paths.main.tsconfig);

    return () => mainTSProject.src()
        .pipe(mainTSProject())
        .js.pipe(gulp.dest(buildPaths.main.scripts));
})());

gulp.task('ui-scripts', ['clean'], (() => {
    const outFileName = paths.ui.scriptsEntrypoint.split('/').pop().replace('.ts', '.js');

    return () => browserify({
        basedir: '.',
        entries: [paths.ui.scriptsEntrypoint],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify, {project: paths.ui.tsconfig})
    .bundle()
    .pipe(source(outFileName))
    .pipe(gulp.dest(buildPaths.ui.scripts));
})());

gulp.task('ui-styles', ['clean'], () => {
    return gulp.src(paths.ui.stylesEntrypoint)
        .pipe(sass({outputStyle: 'extended'}).on('error', sass.logError))
        .pipe(gulp.dest(buildPaths.ui.styles));
});

gulp.task('ui-pages', ['clean'], (() => {
    const uiSASSRelPath = paths.ui.stylesEntrypoint.replace(`${paths.ui.root}/`, '');
    const uiCSSRelPath = uiSASSRelPath.replace('styles', 'css').replace('.scss', '.css');
    const uiTSRelPath = paths.ui.scriptsEntrypoint.replace(`${paths.ui.root}/`, '');
    const uiJSRelPath = uiTSRelPath.replace('scripts', 'js').replace('.ts', '.js');

    return () => gulp.src(paths.ui.pages)
        .pipe(replace(uiSASSRelPath, uiCSSRelPath))
        .pipe(replace(uiTSRelPath, uiJSRelPath))
        .pipe(gulp.dest(buildPaths.ui.pages));
})());

gulp.task('ui-images', ['clean'], () => {
    return gulp.src(paths.ui.images)
        .pipe(gulp.dest(buildPaths.ui.images));
});

gulp.task('ui-fonts', ['clean'], () => {
    return gulp.src(paths.ui.fonts)
        .pipe(gulp.dest(buildPaths.ui.fonts));
});

gulp.task('default', [
    'clean',
    'main-scripts',
    'ui-scripts',
    'ui-styles',
    'ui-pages',
    'ui-images',
    'ui-fonts'
]);
