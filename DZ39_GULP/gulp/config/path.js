import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        js: `${buildFolder}/js`,
        css: `${buildFolder}/css`,
        files: `${buildFolder}/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/index.js`,
        css: `${srcFolder}/style.css`,
        files: `${srcFolder}/**/*.*`
    },
    watch: {
        files: `${srcFolder}/**/*.*`
    },
    clean: `${buildFolder}/**/*.*`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}