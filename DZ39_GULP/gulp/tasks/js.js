import gulpImports from 'gulp-imports'
import webpackStream from "webpack-stream"
export const js =()=>{
    return app.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(webpackStream({
        mode: 'development',
        output: {
            filename: 'index.min.js'
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}