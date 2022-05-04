const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("test");
  // console.log(req.query.name);
  // res.send("root");
  res.json();
});

app.get("/todo", function (req, res) {
  const data = {
    items: [
      { name: "<h1>リンゴ</h1>" },
      { name: "パイン" },
      { name: "<h4>スイカ</h4>" },
    ],
  };
  // レンダリングを行う
  res.render("./index.ejs", data);
  // res.send(data);
});

app.get("/api/users", function (req, res, next) {
  const db = {
    users: [
      { name: "taro", age: 16, height: 160 },
      { name: "syu", age: 17, height: 170 },
      { name: "yui", age: 18, height: 180 },
    ],
  };
  res.render("./index.ejs", db);
  // res.json(db);
});

console.log("http://localhost:" + app.listen(3010).address().port);
