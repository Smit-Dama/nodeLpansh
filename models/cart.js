const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectID, ref: 'User'},
    //totalPrice: {type: Number, default: 0},
    items: [{
        item: {type: mongoose.Schema.Types.ObjectID, ref: 'Product'},
        qty: {type: Number, default: 1},
        price: {type: Number, default: 0}
    }]
});

const cart = mongoose.model('cart' ,cartSchema);
module.exports = cart;