const express = require("express");

const app = express();

app.use(express.json({ extended: false }));
//route
console.log("hit")
app.use("/api/products", require("./routes/api/products"));
console.log("hit");


if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on ${process.env.PORT || 3000}`)
);
