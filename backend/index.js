const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book.routes");
const app = express();

require("dotenv").config();

//Middlewares
app.use(express.json());
app.use("/books",router)





app.listen(3000, () => {
    console.log("Server is running on port 3000");
    mongoose.connect(process.env.MONGOOSE_URI_STRING,{

    });
    mongoose.connection.on("error",(err)=>{
        console.log(err);
    });
});