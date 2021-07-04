import mongoose from 'mongoose';
import { productSchema } from './models/model';

const Product = mongoose.model('Products', productSchema)

export function addnewProduct(){
    let newProduct = new Product(req.body)
    newProduct.save()
        .then(item => {
            res.send("item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database")
        })
}
