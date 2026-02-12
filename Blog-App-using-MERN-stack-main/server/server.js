const express = require("express");
const userRouter = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
require("./config/db");
const path = require('path');
app.use(cors({
  origin: "https://blogpost-in.onrender.com",
  credentials: true
}));

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

const PORT = process.env.PORT ||5000;

app.set("view engine", "ejs");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res, next) => {
  res.send("hello");
});

//define port

app.listen(PORT, () => console.log(`app started at ${PORT}`));
