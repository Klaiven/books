const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    title: {
        type: String
    },
    autor: {
        type: String
    },
    image: {
        type: String
    },
    descricao: {
        type: String
    }
}, {
    collection: 'book'
});

module.exports = mongoose.model('Book', Book);