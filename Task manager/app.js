
const express = require("express");
const app = express();
const tasks = require("./routes/tasks") 
const connectDB = require('./db/connect');
// require('dotenv')

const port = 3000;

app.use(express.static('./public'))
app.use(express.json()); 


app.use('/api/v1/tasks', tasks);

const start = async() =>{
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`Server has started at port ${port}`)
        });
    } catch (error) {
        console.log(error);
    }
}

start()