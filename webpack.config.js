const path = require('path');

// Webpack configuration
module.exports = (env, argv) => {
    const dist = path.resolve(__dirname, (argv.mode === 'production') ? 'dist' : 'node_modules/dist');
    const src = path.resolve(__dirname, 'src');

    return {
        entry: path.join(src, 'index.ts'),
        output: {
            path: dist,
            filename: 'app.bundle.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                    }]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    options: {
                        failOnHint: true,
                        tsConfigFile: require('./tslint.json')
                    },
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
    }
};