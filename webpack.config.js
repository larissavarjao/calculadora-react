const path = require("path");
const webpack = require("webpack");
const combineLoaders = require("webpack-combine-loaders");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "dist"),
        filename: `bundle.[hash].js`,
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "babel-loader?presets[]=es2015,plugins[]=transform-runtime",
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "tsconfig.deploy.json"
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                loader: combineLoaders([
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: false,
                            importLoaders: 1,
                            localIdentName: "[local]"
                        }
                    }
                ])
            },
            {
                test: /react-icons.*\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: combineLoaders([
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader",
                        query: {
                            includePaths: [
                                "./src"
                            ]
                        }
                    }
                ])
            },
            {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "url-loader?mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        }),
        new HtmlWebpackPlugin({
            title: "Styme Host",
            filename: "index.html",
            template: "src/index.html"
        }),
    ]
}
