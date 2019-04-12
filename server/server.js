const express = require('express');
const app = express();
const CardCtrl = require('./controllers/CardCtrl')

app.use(express.json());

app.get('/api/profiles', CardCtrl.sendList);
app.post('/api/profiles', CardCtrl.create);
app.put('/api/profiles/:id', CardCtrl.update);

const port = 8008;
app.listen(port, () => console.log(`port ${port} lenny face`));