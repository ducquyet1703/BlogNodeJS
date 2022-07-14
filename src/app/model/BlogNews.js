const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const News = new Schema({
    STT: { type: Number },
    NameDepartment: { type: String},
    DescriptionDepartment: { type: String },
    EmployeeDepartment: { type: Number},
    ManagerDepartment: { type: String },
    image: {type: String},
    VideoId: {type: String},
    slug: {type: String, slug: 'NameDepartment', unique: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('News', News);
