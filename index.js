const express = require("express");
const fact = require("./service");

const app = express();

// setup body parser
app.use(express.json());

app.get("/fact/:n", (req, res) => {
  let n = parseInt(req.params.n);
  let resFact = fact(n);
  res.json({
    result: `Fact(${n}) = ${resFact}`
  });
});

app.listen(5000, () => {
  console.log("server listening");
});
