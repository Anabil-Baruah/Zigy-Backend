//requiring the express and creating an instance
const express = require('express')
const app = express()

require('dotenv').config()    //to store the confidential information and use them without disclosing them.

//Database connection
const db = require('./database.js');
db.connectToDB();   

//Configure the port to which server should run
const port = process.env.PORT || 3000;

//serve the static files in a directory named "public" at the root level of the application.
app.use(express.static('public'))

// set up middleware functions to parse incoming JSON and URL-encoded data with a maximum size of 100 megabytes.
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }))


// Define the /videos route
app.use('/videos',  require('./routes/videos'));


//Set the view engine of the Express application to EJS. This will help us to render the page and dispaly the contents in it dynamically
app.set("view engine", "ejs")

app.listen(port, () => { console.log("Server started") })