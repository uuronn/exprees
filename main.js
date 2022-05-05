const express = require("express");
const app = express();

// テンプレートエンジンの指定

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

const db = {
  users: {
    name: "issei",
  },
  todos: [{ title: "タスク1" }],
};

// app.get("/", function (req, res) {
//   // レンダリングを行う
//   res.render("./pages/index.ejs", db);
//   // res.send(data);
// });

app.get("/todo", function (req, res, next) {
  res.render("./pages/todo.ejs", { todos: db.todos });
});

app.post("/test", function (req, res, next) {
  console.log(req.body);
  res.render("./pages/todo.ejs", { todos: db.todos });
});

app.get("/users", function (req, res, next) {
  res.render("./pages/users.ejs", { users: db.users });
  // res.json(db);
});

console.log("http://localhost:" + app.listen(3010).address().port);
