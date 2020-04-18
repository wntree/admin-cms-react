path=require('path')
webpack=require('webpack')
pathOutput=path.join(__dirname, 'dist')
isProduction=process.env.NODE_ENV === 'production'
entry=[
    './src/index'
]
output={
    path: pathOutput,
    publicPath: '/dist/',
    filename: 'bundle'+(isProduction?'.[hash]':'')+'.js'
}
plugins=[
    new webpack.HotModuleReplacementPlugin()
]
if(isProduction){
    plugins=plugins.concat([ // 补充生产环境要使用的插件
        new webpack.optimize.UglifyJsPlugin({ // 丑化js
            mangle: true,
            compress: {
                warnings: false // Suppress uglification warnings 阻止难看的警告
            },
            output: {
                comments: false
            }
        })
        ,new webpack.LoaderOptionsPlugin({ // css怎么进行压缩呢？就用插件cssnano加这个配置
            minimize: true
        })
    ])
}
rules=[
    {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
    },
    // {
    //     test: /\.(png|svg|jpg|jpeg|gif)$/,
    //     loader: 'url-loader',
    //     options: {
    //       limit: 10000
    //     }
    //   }//这一段也可以
    { 
        test: /\.(png|gif|jpe?g|eot|ttf|woff|woff2|svg)$/i, //解析图片
        use: 'url-loader?limit='+(8*1024)+'&name=./images/[name].[hash].[ext]' //这样在小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。
    }
]
module.exports={
    devtool: 'eval',
    module:{
        rules
    },
    entry,
    output,
    plugins,
    mode: 'development'
}