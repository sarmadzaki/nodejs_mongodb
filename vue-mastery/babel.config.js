module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // runtimeCompiler: true,
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    }, {
        test: /\.vue$/,
        loader: 'vue'
    }, {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }]
}
}