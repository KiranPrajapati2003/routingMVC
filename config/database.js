const mongoose = require('mongoose');


module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log('connected to database')
    } catch (error) {
        console.log(error);
    }
}