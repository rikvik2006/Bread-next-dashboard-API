import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));