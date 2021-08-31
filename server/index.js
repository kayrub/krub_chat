const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 1126;

app.use(json());
app.use(urlencoded({extended: true}));

app.listen(port, () => console.log(`krub chat listening on port ${port}`))