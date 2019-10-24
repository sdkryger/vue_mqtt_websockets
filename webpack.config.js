const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/mqtt.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundleMqtt.js'
  },
  mode: 'development',
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};