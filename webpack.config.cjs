const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Add the Workbox plugin for service worker
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/main.css",
    }),
    // Workbox GenerateSW plugin for service worker
    new GenerateSW({
      clientsClaim: true, // Activate the new service worker as soon as it’s installed
      skipWaiting: true, // Skip waiting and activate the new service worker immediately
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/, // Cache image assets
          handler: "CacheFirst", // Use cached assets first for images
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 50, // Maximum number of images to cache
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
            },
          },
        },
        {
          urlPattern: new RegExp("https://(api.geonames.org|api.weatherbit.io|pixabay.com)"), // Cache API calls
          handler: "NetworkFirst", // Try network first, fallback to cache
          options: {
            cacheName: "api-calls",
            expiration: {
              maxEntries: 20, // Maximum number of API calls to cache
              maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 7 days
            },
          },
        },
      ],
    }),
  ],
};
