const express = require("express");
const { json } = require("express");
const routes = require("./routes/flightRoute");

const app = express();
app.use(json());
app.use("/data", routes);

app.get("/", (req, res)=>{
  res.send("You are welcome to our portal")
})

app.post("/", (req, res) =>{
  res.send("post route reached")
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
