
module.exports = {
    publicPath: './', //bulid的时候用相对路径
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false, //打包的时候不要生成map文件，map文件可用来追踪运行期错误，但也会导致代码泄露
    //设置开发用web服务器
    devServer: {
        port: 8081,
        open: false,
        proxy: null
    }
}