const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connection = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  const requestData = req.body;
  console.log(requestData.name);
  console.log(requestData.phone);
  console.log(requestData.email);
  console.log(requestData.address);
  console.log(requestData.district);
  console.log(requestData.stateof);
  console.log(requestData.cardNo);
  console.log(requestData.option);
  console.log(requestData.productName);
  console.log(requestData.productPrice);

  let sql = "INSERT INTO payments VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    sql,
    [
      requestData.name,
      requestData.phone,
      requestData.email,
      requestData.address,
      requestData.district,
      requestData.stateof,
      requestData.cardNo,
      requestData.option,
      requestData.productName,
      requestData.productPrice,
    ],
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Successfully inserted");
      }
    }
  );
  res.status(200).json({ message: "Data received successfully" });
});

app.listen(3001, () => {
  console.log("Server running at http://127.0.0.1:3001");
});
