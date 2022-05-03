var express = require("express");
var app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/todo", function (req, res) {
  var data = {
    items: [
      { name: "<h1>リンゴ</h1>" },
      { name: "<h2>バナナ</h2>" },
      { name: "<h4>スイカ</h4>" },
    ],
  };
  // レンダリングを行う
  res.render("./index.ejs", data);
  // res.send(data);
});

app.listen(3010);
