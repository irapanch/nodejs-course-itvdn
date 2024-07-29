const fs = require("fs");

fs.access("example.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist or is not accessible.");
  } else {
    console.log("File exists.");
  }
});

try {
  const fyleExists = fs.accessSync("example.txt", fs.constants.F_OK);
  console.log("File exists (sync).", fyleExists);
} catch (err) {
  console.error("File does not exist or is not accessible (sync).", err);
}

//-----------------

fs.access("example-directory", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("Directory does not exist or is not accessible.");
  } else {
    console.log("Directory exists.");
  }
});

try {
  const directoryExists = fs.accessSync("example-directory", fs.constants.F_OK);
  console.log("Directory exists (sync).", directoryExists);
} catch (error) {
  console.error("Directory does not exist or is not accessible (sync).", error);
}
