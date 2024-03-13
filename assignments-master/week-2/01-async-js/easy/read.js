function readFile() {
  const fs = require("fs");

  const filePath = "file.txt";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("file content", data);
  });
}

readFile(); // async function
let sum = 0;
for (let i = 0; i <= 1000000000000; i++) {
  sum += 1;
}
console.log(" I was printed");
