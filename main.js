const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// consoleに表示するための設定
app.use(express.urlencoded());
app.use(express.json());

const db = {
  todos: [{ title: "タスク1" }, { title: "タスク2" }],
};

const sqlite3 = require("sqlite3");

const dataBase = new sqlite3.Database("./express.db", (err) => {
  console.error("database error: " + err.message);
});

app.get("/todo", function (req, res, next) {
  // 1
  res.render("./pages/todo.ejs", { todos: db.todos });
});

app.post("/todo", function (req, res, next) {
  db.todos.push({ title: req.body.title });
  res.redirect("/todo");
});

console.log("http://localhost:" + app.listen(3010).address().port + "/todo");
