let express = require("express");
let expressApp = express();
let bodyParser = require("body-parser");


let users = [
  { id: 123, name: "Rakesh" },

  { id: 321, name: "Rahul" },

  { id: 999, name: "vijay" },
];

expressApp.use(bodyParser.json());

expressApp.use(express.static("general"));

expressApp.get("/file", (req, res) => {
  res.sendFile("WebPage.html").status(200);
  res.end();
});

expressApp.post("/user", (req, res) => {
  const NewUser = req.body;

  if (NewUser.id) {
    let NewId = NewUser.id;
    IsUserAlreadyThere = users.find((user) => {
      return user.id == NewId;
    });
    if (IsUserAlreadyThere) {
      res.status(500).send("user alrready exist!");
      return;
    }
    users.push(NewUser);

    res.send("new user added").status(200);
    res.end();
  } else {
    res.send("Invalid Input").status(404);
  }
});

expressApp.delete("/delete/:userId", (req, res) => {
  users = users.filter((user) => {
    return user.id != req.params.userId;
  });
  res.send(req.params.userId + "  user deleted successfully").status(200);
  res.end();
});

expressApp.get("/users", (req, res) => {
  //res.json(users)
  res.send(users).status(200);
  res.end();
});

expressApp.get("/", (req, res) => {
  res.send("please enter any route to explore").status(200);
  res.end();
});

expressApp.get("/user", (req, res) => {
  //res.json(users)
  res.redirect("/users");
});

expressApp.get(/^\/user\/(\d{3})$/, (req, res) => {
  let searchedUser = users.find((user) => {
    return user.id == req.params[0];
  });

  res.send(searchedUser).status(200);
  res.end();
});

expressApp.listen(8999, () => {
  console.log("server is UP");
});
