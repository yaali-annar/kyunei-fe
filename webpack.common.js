const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  title: "PAWAI",
});

const plugins = [htmlWebpackPlugin];

const rules = [
  { test: /\.[t]sx?$/, use: "ts-loader", exclude: /node_modules/ },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"],
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
        },
      },
    ],
  },
];

module.exports = {
  plugins,
  entry: {
    app: "./src/index.tsx",
  },
  module: { rules },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
