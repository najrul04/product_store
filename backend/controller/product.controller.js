import mongoose from "mongoose"; // to communicate with mongodb database
import Product from "../models/product.model.js";

export const getProducts =  async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error){
        console.log('Error in Get Products:', error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createProducts =  async(req, res) => {
    const product = req.body; // user will seened this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);
    
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error){
        console.error('Error in Create Product:', error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}

export const updateProducts =  async(req, res) => {
    const { id } = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid Product ID"});
    }

    try{
        const UpdatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: UpdatedProduct});
    } catch (error){
        console.log('Error in Update Product:', error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}


export const deleteProducts =  async(req, res) => {
    const { id } = req.params; 
    console.log("id:", id);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid Product ID"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error){
        console.log('Error in Delete Product:', error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
