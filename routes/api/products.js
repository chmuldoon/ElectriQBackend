const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const cors = require("cors");
const API_KEY = require("../../config/keys").API_KEY
const API_PASS = require("../../config/keys").password;

router.get("/", cors(), async (req, res) => {
  //sets base64 key and adds it it auth header
  const base64 = Buffer.from(`${API_KEY}:${API_PASS}`).toString("base64");
  const Authorization = "Basic " + base64;
  const config = {headers: { Authorization }}
  //try catch prevents silent errors
  try {
    const url = "https://electriq-marketing-test.myshopify.com/admin/api/2020-07/products.json?"
    await fetch(url, config)
      .then((res) => res.json())
      .then((result) => res.json(result))
      .catch((err) => res.json({ msg: "Products not found" }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});





module.exports = router;
