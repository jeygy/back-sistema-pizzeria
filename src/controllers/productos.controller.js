const productoCtrl = {};
const { Producto } = require("../database");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

productoCtrl.getProductos = async (req, res) => {
  try {
    const lstProductos = await Producto.findAll();
    res.status(200).json(lstProductos);
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.createProducto = async (req, res) => {
  try {
    const productoNuevo = req.body;
    const productoCreado = await Producto.create(productoNuevo);
    res.status(201).json(productoCreado);
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.getProductoById = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const producto = await Producto.findOne({ where: { id: idProducto } });
    if (producto) {
      res.status(200).json(producto);
    } else {
      res
        .status(404)
        .json({ message: `No existe ningun producto con id: ${idProducto}` });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.updateProducto = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const nuevosDatos = req.body;
    const producto = await Producto.findOne({ where: { id: idProducto } });

    if (producto) {
      const prodModificado = await producto.update(nuevosDatos);
      res.status(200).json(prodModificado);
    } else {
      res
        .status(404)
        .json({ message: `No existe ningun producto con id: ${idProducto}` });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.deleteProducto = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const prodEliminado = await Producto.destroy({ where: { id: idProducto } });

    if (prodEliminado) {
      res.status(200).json({ message: "Producto Eliminado" });
    } else {
      res
        .status(404)
        .json({ message: `No existe ningun producto con id: ${idProducto}` });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.getProductoConsumible = async (req, res) => {
  try {
    const prodConsumible = await Producto.findAll({
        where:{categoriumId: { [Op.ne]: 1 }}
      });
      if (prodConsumible) {
        res.status(200).json(prodConsumible);
      } else {
        res.status(404).json({message:"No exite ningún producto consumible"});
      }
  } catch (error) {
      res.json({message:error});
  }
};

module.exports = productoCtrl;
