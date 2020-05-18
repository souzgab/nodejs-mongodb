const mongoose = require('mongoose')
const requireDir = require('require-dir')
requireDir('../models')
const Product = mongoose.model('Product')

module.exports = {
    async productGet(req, res){
        try{
            const { page = 1} = req.query;
            const productsGt = await Product.paginate({},{page , limit: 10});
            return res.status(200).send({products: productsGt})
        }catch(e){
            return res.status(400).send(`Error -> ${e}`)
        }
    },

    async productCreate(req,res){
        try{
            const productCt = await Product.create(req.body)

            return res.status(200).send({message:"Insert done" ,product: productCt})
        }catch(e){
            return res.status(400).send(`Error -> ${e}`)
        }
    },

    async productShow(req, res){
        try {
            const productSw = await Product.findById(req.params.id)

            return res.status(200).send({message:"Find itens, OK" ,product: productSw})
        } catch (e) {
            return res.status(400).send(`Error -> ${e}`)
        }
    },

    async productUpdate(req,res){
        try {
            const productUpdt = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

            return res.status(200).send({message:"Updated itens, OK" ,product: productUpdt})
        } catch (e) {
            return res.status(400).send(`Error -> ${e}`)
        }
    },

    async productDelete(req,res){
        try {
            await Product.findByIdAndRemove(req.params.id)

            return res.status(200).send({message:"Removed itens, OK"})
        } catch (e) {
            return res.status(400).send(`Error -> ${e}`)
        }
    }
}