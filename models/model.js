let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UberSchema = new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    rank:{
        type:String
    },
    available:{
        type:Boolean,
        default:false
    }
});

let Uber = mongoose.model('uber',UberSchema);

module.exports = Uber;