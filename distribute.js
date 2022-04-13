axios = require('axios');

module.exports = {
    distribute: (req, urls) => {
        const headers = req.headers;
        delete headers['host'];
        delete headers['connection'];
        delete headers['content-length'];

        const responses = [];
        urls.forEach(url => {
            responses.push(axios.request({
                'url': url,
                'method': req.method.toLowerCase(),
                'headers': headers,
                'data': req.body,
            }).then(res => {
                console.log(res.config.url + ' success ' + res.status);
            }).catch(e => {
                console.log(e.config.url + ' failed ' + e.response.status);
                console.log(e.response.data);
            }));
        });
        Promise.allSettled(responses).then((results) => {
            console.log('Done.');
        });
    }
};
