const express = require('express');
const cors = require('cors');
const orderController = require('../src/controllers/order.controller');

const app = express();

app.use(express.static('public'));

app.use(cors());

app.use(express.json());

app.get('/orders', orderController.getAllOrders);

module.exports = app;