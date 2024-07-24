import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send(`Welcome to my server!`)
})

app.listen(PORT, () =>{
    console.log(`Server running on the port ${PORT}`)
})