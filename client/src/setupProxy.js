const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    //Proxying
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
        })
    );
};