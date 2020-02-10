let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

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
    },
    geometry: GeoSchema
});

let Uber = mongoose.model('uber',UberSchema);

module.exports = Uber;