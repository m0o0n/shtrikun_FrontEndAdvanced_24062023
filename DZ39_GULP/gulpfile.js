import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
import {copy} from './gulp/tasks/copy.js'
import { css } from './gulp/tasks/css.js'
import { html } from './gulp/tasks/html.js'
import { js } from './gulp/tasks/js.js'
import { reset } from './gulp/tasks/reset.js'
import { server } from './gulp/tasks/server.js'
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

const watcher =()=>{
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.files, css)
    gulp.watch(path.watch.files, html)
    gulp.watch(path.watch.files, js)
    gulp.watch(path.watch.files, reset)
}
const mainTasks = gulp.parallel(copy, css, html)
const dev = gulp.series(reset, mainTasks, js, gulp.parallel(watcher, server))

gulp.task('default', dev)