const Inventory = require('../models/inventory');

async function newInventory(req, res) {

    const Inventory = new Inventory(req.body);
    console.log(Inventory);
}