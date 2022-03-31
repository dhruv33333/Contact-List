//getting mongoose
const mongoose = require('mongoose'); 

//creating contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requried: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;