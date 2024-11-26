import { defineConfig } from "vite";
import * as glob from "glob";
import path, { resolve } from "node:path";
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';
import {generarContextoDePagina} from './data/index';

const getHtmlEntries = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync('./**/*.html', { ignore:['./dist/**','./node_modules/**']}).map(file=>[
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ])
        ]
    )
}

export default defineConfig(
    {
        appType: 'mpa',
        base: "/pw2-202403-vite/",
        build: {
            rollupOptions: {
                input: getHtmlEntries()
            }
        },
        plugins: [
            handlebars(
                {
                    partialDirectory: resolve(__dirname, 'partials'),
                    context: generarContextoDePagina
                }
            ),
            htmlPurge({}),
        ]
    }
);