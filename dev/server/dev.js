/**
 * Created by chkui on 2017/6/21.
 */
const devServer = require('pwfe-server/devServer'),
    reducer = require('../config/reducer'),
    routes = require('../config/routes'),
    vendor = require('../../webpack/vendor'),
    path = require('path')
devServer({
    workDir: path.resolve(__dirname, '..'), //dev目录
    entry: './src/wfc',
    app: ()=>require('pwfe-dom/app'),
    outPath: './dist',
    runMode: 'SITE',
    localRun: false,
    reducer: reducer,
    routes: routes,
    vendor: vendor,
    header : () => require("../src/frame/header"),
    footer : () => require("../src/frame/footer"),
    sourceMap: "source-map",
    define:{
        __RunMode:JSON.stringify('DEV'),
        __FluxLogLevel:"'Detail'",
        __History:"'Browser'"
    },
    defPageName: '世界足球博物馆'
});