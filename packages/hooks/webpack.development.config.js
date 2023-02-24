const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        filename: 'bundle.js',
        clean: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 4000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"  
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development poke-API using react hooks',
            template: './public/index.html',
        })
    ],
    resolve: {
        extensions: [".css",".ts",".tsx",".js",".tsx"]
    }
};
