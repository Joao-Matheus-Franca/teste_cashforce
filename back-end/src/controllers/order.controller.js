const orderService = require('../services/order.service')

const getAllOrders = async (_req, res) => {
    try {
      const orders = await orderService.getAll();
      return res.status(200).json(orders);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Erro ao carregar pedidos' });
    }
  };
  
  module.exports = { getAllOrders };