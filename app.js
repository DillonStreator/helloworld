const express = require('express');
const path = require('path');

const app = express();

app.use('/favicon.ico', express.static('favicon.ico'));

const INDEX_HTML_FILE = path.join(__dirname,'index.html');

app.use('/*', (req, res) => {
    res.sendFile(INDEX_HTML_FILE);
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
