module.exports = {
    devServer: {
        port: 8081,
        publicPath: '/',
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8082',
                pathRewrite: { '^/api' : '' },
                secure: false,
                changeOrigin: true
            }
        }
    }
}