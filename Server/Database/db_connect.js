const mongoose = require('mongoose');

require("dotenv").config();

exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Database Connection Successful'))
    .catch((err) => {
        console.log('Database Connection Failed')
        console.log(err)
        process.exit(1)
    });
}
