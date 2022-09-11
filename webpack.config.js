const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const wasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    entry:'./public/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
       new htmlWebpackPlugin({
        template:'./public/index.html'
       }),
       new wasmPackPlugin({
        crateDirectory:path.resolve(__dirname,'.')
       })
    ],
    experiments:{
        asyncWebAssembly:true
    }
}