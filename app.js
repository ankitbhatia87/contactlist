const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route');


const app = express();

const port = '3000';

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

app.use(cors());

app.use(bodyParser.json());

mongoose.connection.on('connected', ()=>{
    console.log('connected to db');
})

mongoose.connection.on('error', (err)=>{
    if(err) {
        console.log(err);
    }
})

app.use('/api', route);

app.use(express.static(path.join('__dirname', 'public')));

app.get('/', (req, res) => {
    res.send('foobar');
})

app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})