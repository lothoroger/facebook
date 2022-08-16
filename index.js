import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import routelists from './routes/routelists.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/fb', routelists)


//const CONNECTION_URL = "mongodb+srv://lothor:PyqzlRvqk8NFizvL@cluster0.laj0p.mongodb.net/fbcomments?retryWrites=true&w=majority";
const CONNECTION_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
