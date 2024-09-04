const express = require('express')
const todoRoutes = require('./Routes/todo.routes')
const {connectDB} = require('./Database/db_connect')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use('/api/v1', todoRoutes);

app.listen(PORT, () => {
    console.log('The Server is listening at: '+`http://localhost:${PORT}/`)
})

connectDB();

app.get('/', (req, res) => {
    res.send(`<h2>Hello! How are You?</h2>`)
})