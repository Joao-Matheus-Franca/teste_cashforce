const { OrderModel } = require('../models');

const getAll = async () => {
    const orders = await OrderModel.findAll();

    return orders;
};  

module.exports = getAll