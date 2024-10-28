const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    sellerId: {
        type: Schema.ObjectId,
        required: true,
        ref: 'sellers'
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    unit: {
        type: String,
        required: true,
        enum: ['kg', 'g', 'pc', 'pack']
    },
    harvestDate: {
        type: Date,
        required: true
    },
    bestBefore: {
        type: Date,
        required: true
    },
    salesCount: {
        type: Number,
        default: 0
    },
    lastSaleDate: {
        type: Date
    },
    inventoryHistory: [{
        date: Date,
        quantity: Number
    }]
}, { timestamps: true })

productSchema.index({
    name: 'text',
    category: 'text',
    brand: 'text',
    description: 'text'
}, {
    weights: {
        name: 5,
        category: 4,
        brand: 3,
        description: 2
    }
})

module.exports = model('products', productSchema)