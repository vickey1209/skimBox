const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(

    {
        name : {
            type: String,

        },
        company: {
            type : String
        },
        cost:{
            type: Number
        }
    }
)

module.exports = mongoose.model('Product', productSchema)