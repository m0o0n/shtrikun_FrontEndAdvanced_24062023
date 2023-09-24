import cssimport from "gulp-cssimport"
import cleanCSS from'gulp-clean-css'
import rename from "gulp-rename"
export const css =()=>{
    return app.gulp.src(app.path.src.css, {sourcemaps: true})
    .pipe(cssimport())
    .pipe(cleanCSS())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}