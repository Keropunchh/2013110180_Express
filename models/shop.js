const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:  { type: String, required:true,trim:true }, // String is shorthand for {type: String}
    photo: { type: String, default: 'nopic.png' },
    location: {
        lat: Number,
        lgn: Number
    },
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now }
  },{
    toJSON: {virtuals: true},
    timestamps:true,
    collection:"shops" });

shopSchema.virtual('menus',{
  ref:'Menu',
  localField:'_id',
  foreignField:'shop'
})
const shop = mongoose.model("shop",shopSchema)

module.exports = shop