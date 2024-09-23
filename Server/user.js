const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    email: String,
    fullName: String,
    address: String,
    contactNo: String,
    age: String,

})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;