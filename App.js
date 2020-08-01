const express = require("express");

const app = express();

app.use(express.json({ extended: false }));
//route
app.use("/api/products", require("./routes/api/products"));


app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on ${process.env.PORT || 3000}`)
);
 