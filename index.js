const express = require("express");
const mongoose = require("mongoose");
const videoRouter = require("./routers/videoRouters.js");
const userRouter = require("./routers/userRouter.js");

// app use
const app = express();
app.use(express.json());

// use root route api
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// initialize database connection
mongoose
  .connect(
    "mongodb+srv://Ghuronti:admin123@cluster0.1ssjj.mongodb.net/Ghuronti?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
    const PORT = 2000;
    app.listen(PORT, () => {
      console.log(`port running: `, PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
