const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const notesRoutes = require('./routes/notesRoutes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', notesRoutes)

app.listen(5000, ()=>{
    console.log('Server Running On Port 5000')
})