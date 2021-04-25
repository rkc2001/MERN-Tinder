/* This file is where all the logic for our backend will go */
import express, { response } from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
//Importing DB structure
import Cards from './dbCards.js'

//Lining up application (points 1 ... to ... 5)

/* 1. App Config */

const app = express();  //a> creating an instance
const port = process.env.PORT || 8001;  //b> define port where our application is going to listen
const connection_url = 'mongodb+srv://admin:HAl4OmEh7UaP6lMQ@cluster0.dm8oo.mongodb.net/tinderdb?retryWrites=true&w=majority'

/* 2. Middlewares */

app.use(express.json());
app.use(Cors());

/* 3. DataBase Config - Here we connect our app to MongoDB database */

mongoose.connect(connection_url,{
  //Few parameters we pass to our connection
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

  //After the connection, we create a DB schema -> dbCards.js

/* 4. API Endpoints */

app.get('/',(request,response) => {
  response.status(200).send('Hello World !');
})

///Endpoint to add (push) data into the database
app.post('/tinder/card',(req,res) => {
  const dbCard = req.body;

  ///Function to create a new document
  Cards.create(dbCard,(err,data) => {
    if(err){
      res.status(500).send(err);
    } else {
      //201 - created and we send back the data
      res.status(201).send(data);
    }
  })
})

///To see whether data is created via post, we need to create another endpoint to download data from DB
app.get('/tinder/card',(req,res) => {
  Cards.find((err,data) => {
    if(err){
      res.status(500).send(err);
    } else {
      //200 - success and we send back the data
      res.status(200).send(data);
    }
  })
})

/* 5. Listeners */
app.listen(port, () => console.log(`listening on localhost: ${port}`));

//MongoDB Cluster Details
//admin ... HAl4OmEh7UaP6lMQ