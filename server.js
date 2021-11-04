const express = require('express');
const path = require('path');
const app = express();


//getting our Stockroutes
const routes = require('./server/routes/routes');

//using middlewar
app.use(express.static(path.join(__dirname, 'dist/ang-node')));
app.use('/routes', routes);


//catch all other routes request and return to the index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'))
});

const port = process.env.PORT || 4600;


app.listen(port, (req, res) => {
    console.log(`running on port ${port}`);
});