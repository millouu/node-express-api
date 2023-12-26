import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

//we are going to be using json data for our application
app.use(bodyParser.json());

app.get('/', (req, res) => {    
    res.send('Hello from homepage')
})

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`)
})