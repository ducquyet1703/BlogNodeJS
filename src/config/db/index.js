const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_quyet_dev');
        console.log("Connect thành công")
    } catch (error) {
        console.log("Connect không thành công")
    }
}

module.exports = { connect }