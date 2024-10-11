
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    img: String,
    view:String,
    date:String,
})

const bookModle = mongoose.model('bookTbl', bookSchema);

module.exports = bookModle;
