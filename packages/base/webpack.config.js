const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ["url-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(cesiumSource, cesiumWorkers),
                    to: "Workers",
                },
                {
                    from: path.join(cesiumSource, "Assets"),
                    to: "Assets",
                },
                {
                    from: path.join(cesiumSource, "Widgets"),
                    to: "Widgets",
                },
            ]
        }),
        new webpack.DefinePlugin({
            CESIUM_BASE_URL: JSON.stringify(""),
        }),
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        // alias: {
        //     cesium$: 'cesium/Cesium',
        //     cesium: 'cesium/Source'
        // }
    }
}