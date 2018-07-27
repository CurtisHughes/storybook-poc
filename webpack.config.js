const path = require('path');

const dist = path.resolve(__dirname, (process.env.NODE_ENV === 'production') ? 'dist': 'node_modules/dist');
const src = path.resolve(__dirname, 'src');

// Webpack configuration
module.exports = {
    entry: path.join(src, 'index.js'),
    output: {
        path: dist,
        filename: 'app.bundle.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: [["env", {"modules": false} ], 'react'],
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};