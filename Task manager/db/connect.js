
const mongoose = require("mongoose");

const connectionString = 'mongodb+srv://aymanawal555:aymanawal555@expresscluster.tgpnb2u.mongodb.net/myDatabase?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;

