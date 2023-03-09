const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name:  { type: String, required:true,trim:true }, // String is shorthand for {type: String}
    photo: { type: String, default: 'nopic.png' },
    salary: { type: Number },
    created: { type: Date, default: Date.now }
  },{collection:"staffs" });

  const staff = mongoose.model("staff",staffSchema)

  module.exports = staff