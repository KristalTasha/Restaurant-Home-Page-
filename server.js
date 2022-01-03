const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const morgan = require('morgan');
const connection = require('./db');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 6013

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(morgan("dev"));
app.set('view engine', "ejs");


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', async (req, res) => {
    // res.send('this is for testing the url')

    const db = await connection.getConnection('restaurant')
    db.collection('reviews').find({}).toArray((err, data) => {

        res.render('about', {
            title: "About Us",
            info: data
        });

    })

})

app.get('/contact', async (req, res) => {
    res.render('contact', {
        title: "Contact Us"
    });

})

app.get('/submitted', async (req, res) => {

    res.render('submitted', {
        title: "Thank You"
    });

})

app.get('*', async (req, res) => {
    res.render('notfound', {
        title: "404"
    });

})


app.post('/contacts', async (req, res) => {

    let user = {
        fullName: req.body.fullName,
        city: req.body.city,
        comment: req.body.comment,
        rating: req.body.rating,
    };

    const db = await connection.getConnection('restaurant')

    db.collection('reviews').insertOne(user, (err, data) => {
        if (err) throw err;

        if (data) res.redirect('/submitted')


    });




})


connection.dbConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}!`)
    })

})