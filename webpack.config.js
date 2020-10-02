//引用path模組
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    entry: ['./src/index.js'],
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        // publicPath: "/dist/",
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve(__dirname, 'dist'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            //JSX
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
                }
            },
            //sass
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './index.css',
        }),
    ],
    //增加一個給devserver的設定
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        // publicPath: "http://localhost:3000/dist/",
        // hotOnly: true
    },
};
