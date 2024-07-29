const fs = require("fs");

try {
  console.log("File read sync #1"); //1
  const data = fs.readFileSync("example.txt", "utf8"); //++ Синхронне виконання(блокує основний потік)
  console.log("File content (sync):", data); //2
} catch (err) {
  console.error("Error reading file (sync):", err);
}

console.log("File read async"); //3
fs.readFile("example.txt", "utf8", (err, data) => {
  //+++асинхронне виконнаня(НЕ блокує основний потік)
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data); //6!!!!
});
try {
  console.log("File read sync #2"); //4
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File content (sync):", data); //5
} catch (err) {
  console.error("Error reading file (sync):", err);
}
