/**
 * Created by chkui on 2017/6/22.
 */
const path = require('path'),
    routes = require('../../dev/config/routes'),
    reducer = require('../../dev/config/reducer'),
    vendor = require('../../webpack/vendor'),
    config = {
        nameTag: '',
        idTag: '[id]',
        workDir: path.resolve(__dirname, '../..'),
        entry: './dev/src/chkui',
        outPath: './site/dist',
        app: ()=> require('pwfe-dom/app'),
        htmlTemplatePath: './dev/views/index.tpl.html',
        serverEntry: './site/server/entry',
        serverModule: './node_modules',
        reducer: reducer,
        routes: routes,
        vendor: vendor,
        compressJs: true,
        mergingChunk: true,
        sourceMap: false,
        port: 12001,
        header : () => require("../../dev/src/header"),
        footer : () => require("../../dev/src/footer"),
        define: {
            __RunMode: JSON.stringify('SITE'),
            __FluxLogLevel:"'None'",
            __History:"'Browser'"
        },
        defPageName: '网站建设工具'
    }

module.exports = config