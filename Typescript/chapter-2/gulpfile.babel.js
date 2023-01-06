import gulp from "gulp";
import gts from "gulp-typescript";
import ws from "gulp-webserver";
import del from "del";
import htmlmin from "gulp-htmlmin";

const routes = {
    html: {
        watch: `src/**/*.html`,
        src: `src/*.html`,
        dest: `build`
    },
    ts: {
        watch: `src/ts/*.ts`,
        src: `src/ts/*.ts`,
        dest: `build/js`
    }
}

const clean = () => del([`build/`]);

const webserver = () => gulp.src(`build`)
    .pipe(ws({ livereload: true }));

const html = () => gulp.src(routes.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(routes.html.dest));

const ts = () => gulp.src(routes.ts.src)
    .pipe(gts({
        noImplicitAny: true,
        outFile: `index.js`
    }))
    .pipe(gulp.dest(routes.ts.dest));

const watch = () => {
    gulp.watch(routes.html.watch, html)
    gulp.watch(routes.ts.watch, ts)
}

const prepare = gulp.series([clean]);

const assets = gulp.series([html, ts]);

const live = gulp.parallel([webserver, watch])

export const dev = gulp.series([prepare, assets, live]);