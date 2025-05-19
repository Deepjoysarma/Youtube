import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js'

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
connectDB();

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})