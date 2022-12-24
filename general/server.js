let htttp = require("http")

let server = htttp.createServer((req, res) => {
  let user = {
    name: "Rakesh",
    age: 23,
    mob: 1234,
    Qualification: "Masters in Economics",
  };

  res.write(JSON.stringify(user));

  res.write("  Hello Rakesh! you have successfully created your first server");

  res.end();
});
server.listen(9908, () => {
  console.log("server has started to work");
});
