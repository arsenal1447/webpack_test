var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps,选择合适的选项
    
    entry: __dirname + "/app/main.js",
    output:{
        path: __dirname + "/public",
        filename:"bundle.js"
    },

    module:{
        loaders:[
            { test:/\.json$/,loader:"json"  },
            { test: /\.js$/,exclude: /node_modules/,loader: 'babel' },
            { test:/\.css$/,loader:'style!css?modules!postcss'//这里添加PostCSS }
        ]
    },

    postcss:[
        require('autoprefixer')//调用autoprefixer插件
    ],

    plugins:[
        new webpack.BannerPlugin("Copyrigt Flying Unicorns inc.")
    ],

    devServer:{
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}
