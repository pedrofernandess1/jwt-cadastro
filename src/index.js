var http = require('http');
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get(`/`, (req, res) => {
    return res.json({ 'oi': 'Hello' })
});

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started');
});