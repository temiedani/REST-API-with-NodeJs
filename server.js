require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { collection } = require('./models/user')

// enviroment variables
PORT=process.env.PORT || 3000
DATABASE_URL =process.env.DATABASE_URL || "mongodb://localhost/users"

// Connect to database
mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())
// Import routes
const userRouter = require('./routes/api/users')
app.use('/users', userRouter)

// Start the server 
app.listen(PORT, () => console.log('Server Started'))