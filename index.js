const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//import Routes
const postRoute = require('./router/post')
const authRoute = require("./router/auth");
dotenv.config();

//connect to DB
mongoose.connect(
  process.env.DBConstant,
  {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("database connected")
);

//middleware
app.use(express.json());

//route middleware
app.use("/api/users", authRoute);
app.use('/api/posts', postRoute)

app.listen(3000, () => {
  console.log("server is up");
});
