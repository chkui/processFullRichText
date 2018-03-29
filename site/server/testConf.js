/**
 * Created by chkui on 2017/6/22.
 */
const path = require('path'),
    routes = require('../../dev/config/routes'),
    reducer = require('../../dev/config/reducer'),
    vendor = require('../../webpack/vendor'),
    config = {
        workDir: path.resolve(__dirname, '../..'),
        entry: './dev/src/wfc',
        outPath: './site/dist',
        app: ()=> require('pwfe-dom/app'),
        htmlTemplatePath: './dev/views/index.tpl.html',
        serverEntry: './site/server/entry',
        serverModule: './node_modules',
        reducer: reducer,
        routes: routes,
        vendor: vendor,
        compressJs: false,
        sourceMap: 'source-map', //测试环境生成source-map
        mergingChunk: false,
        port: 12000,
        header : () => require("../../dev/src/frame/header"),
        footer : () => require("../../dev/src/frame/footer"),
        define: {
            __RunMode: JSON.stringify('TEST'),
            __FluxLogLevel:"'Detail'",
            __History:"'Browser'"
        },
        defPageName: '马良行'
    }

module.exports = config