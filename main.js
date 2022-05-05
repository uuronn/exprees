const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const data = {
    items: [{ name: "リンゴ" }, { name: "パイン" }, { name: "スイカ" }],
  };
  // レンダリングを行う
  res.render("./pages/index.ejs", data);
  // res.send(data);
});

app.get("/users", function (req, res, next) {
  const db = {
    users: [
      { name: "taro", age: 16, height: 160 },
      { name: "syu", age: 17, height: 170 },
      { name: "yui", age: 18, height: 180 },
    ],
  };
  res.render("./pages/users.ejs", db);
  // res.json(db);
});

console.log("http://localhost:" + app.listen(3010).address().port);
