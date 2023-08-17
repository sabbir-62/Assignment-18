const mongoose = require('mongoose');

const DataSchema =  mongoose.Schema(
    {
        title: {type: String},
        content: {type: String},
        author: {type: String},
        createdDate: {
            type: Date,
            default: Date.now()
        }
    },
    {
        timeStamps: true,
        versionKey: false
    }
)

const ProductModel = mongoose.model('blogs', DataSchema);
module.exports = ProductModel;