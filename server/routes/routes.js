const express = require ('express');
const router = express.Router();

const axios = require('axios');

const StockAPI = 'https://ladu.tammik.eu/stock';
//GET stock
router.get('/', (req, res)=>{
    res.send('it works')});


router.get('/stock', (req, res)=>{
    axios.get(`${StockAPI}/1`).then(stock=>{
        res.status(200).json(stock.data);
        console.log(stock.data);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
});


module.exports = router;