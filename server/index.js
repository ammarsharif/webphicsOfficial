import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/posts.js";
const app = express();
// dotenv.config();
app.use(bodyParser.json({ limit: "50mb", extended: true })); //Parsers are used to get data to the controller OR to sent in an HTTP request

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors()); //allows a server to indicate any origins (domain, scheme, or port)

app.use("/posts", router);
const CONNECTION_URL =
  "mongodb+srv://webphics:webphics123@cluster0.3ylrwdt.mongodb.net/"; //This url is taken from the mongodb cluster by connecting it with the application

const PORT = process.env.PORT || 5000; //now use 3000 but by using heruko it automatically connect with PORT

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, //These two are not basically needs but it protects us from some unexpected errrors
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Port is running at ${PORT}`)))
  .catch((e) => {
    console.log(e.message);
  });

// mongoose.set("useFindAndModify", false); //This makes sure that we don't get any warnings in console
