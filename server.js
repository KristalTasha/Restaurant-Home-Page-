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
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.set('view engine', "ejs");


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'public','index.html'));
    res.render('index');
})

app.get('/about', async (req, res) => {
    // res.send('this is for testing the url')

     const db = await connection.getConnection('restaurant')
    db.collection('reviews').find({}).toArray((err, data) => {

     res.render('about', {info: data});

    })

   
})

app.get('/contact', async (req, res) => {
    // res.send('this is for testing the url')
      res.render('contact');
   
})

app.get('/submitted', async (req, res) => {
    
      res.render('submitted');
   
})


app.post('/contacts', async (req, res) => {
   
 let user = {
        fullName: req.body.fullName,
        city: req.body.city,
        comment: req.body.comment,
        rating: req.body.rating,
    };

    // const user = req.body;

    const db = await connection.getConnection('restaurant')

    db.collection('reviews').insertOne(user, (err, data) => {
        if(err) throw err;
        // if(data) res.send(user)
        if(data) res.redirect('/submitted')

        
    });

    


})


connection.dbConnection().then( () => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}!`)
    })

})