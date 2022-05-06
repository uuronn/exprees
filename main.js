const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// consoleに表示するための設定
app.use(express.urlencoded());
app.use(express.json());

// const db = {
//   todos: [{ title: "タスク1" }, { title: "タスク2" }],
// };

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./express.db", (err) => {
  if (err) console.error(err);
});

app.get("/todo", function (req, res, next) {
  db.all("select * from todos", [], (err, rows) => {
    if (err) {
      res.status(500).render("./pages/500.ejs");
    } else {
      res.render("./pages/todo.ejs", { todos: rows });
    }
  });
});

app.post("/todo", function (req, res, next) {
  const stmt = db.prepare(`insert into todos (title) values (?)`);
  stmt.run(req.body.title);
  stmt.finalize((err) => {
    if (err) {
      res.status(500).render("./pages/500.ejs");
    } else {
      res.redirect("/todo");
    }
  });
});

console.log("http://localhost:" + app.listen(3010).address().port + "/todo");
