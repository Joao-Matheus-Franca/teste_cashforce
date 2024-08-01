const { Order, Buyer, Provider } = require('../models');

const getAll = async () => {
    const orders = await Order.findAll({
        include: [
            {
                model: Buyer,
                attributes: ['id', 'name']
            },
            {
                model: Provider,
                attributes: ['id', 'name']
            }
        ]
    });

    return orders;
};  

module.exports = { getAll };