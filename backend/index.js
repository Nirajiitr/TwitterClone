import express from "express";
import "dotenv/config";
import authRoute from "./Routes/authRoute.js"; 
import mongoose from "mongoose";
import cors from "cors"
const app = express();
const port = process.env.PORT || 3000;
//DataBase
mongoose.connect(process.env.DB_URL).
then(()=>console.log("database is connected")).
catch(error=>
    console.log("your database connection failed:",error)
)


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use("/", authRoute);

app.get("/", (req, res) => {
    res.send("<h1>Hi Niraj</h1>");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
