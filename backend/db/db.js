const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB')
    } catch (error) {
        console.log('DB Connection Error', error);
    }
}

module.exports = {db}