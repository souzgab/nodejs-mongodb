const mongoose = require('mongoose')
const mongoosePag = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
})

ProductSchema.plugin(mongoosePag);

module.exports = mongoose.model("Product", ProductSchema);