const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
    STT: { type: Number },
    NameDepartment: { type: String},
    DescriptionDepartment: { type: String },
    EmployeeDepartment: { type: Number},
    ManagerDepartment: { type: String },
    image: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', News);
