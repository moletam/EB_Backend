// const os = require("os");
// console.log(os.freemem());
// console.log(os.hostname());
const fs = require("fs");
fs.writeFile("index.html", "<br/><h1>Heading One</h1>", (err) => {
  if (err) throw err;
  console.log("appended ");
});
fs.appendFile("index.html", "<br/><h1>Heading One</h1>", (err) => {
  if (err) throw err;
  console.log("appended ");
});
fs.readFile("index.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log(__dirname);
