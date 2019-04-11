const express = require('express');
const app = express();

app.use(express.json());

const port = 8008;
app.listen(port, () => console.log(port, "lenny face"))