const fs = require('fs');
const YAML = require('yaml');
const express = require('express');
const bodyParser = require('body-parser');
const { distribute } = require('./distribute');
require('dotenv').config();

const file = fs.readFileSync(process.env.SERVERS || 'servers.yml', 'utf8')
const servers = YAML.parse(file)

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.raw({'type': '*/*', 'limit': '128mb'}));

app.listen(port, () => {
    console.log(`Webhook Router is listening on port ${port}`);
});

app.post('/hook/:type', (req, res) => {
    console.log(`Hook received: ${req.params.type}`);
    if (!servers[req.params.type]) {
        return res.status(404).send('Type not found');
    }

    distribute(req, servers[req.params.type]);
    res.send('OK');
});

app.get('/', (req, res) => {
    res.json({'types': Object.keys(servers)});
});
