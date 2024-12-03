const http = require("http");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/",
  method: "GET",
};
const requestToExample = http.request(options, (resExample) => {
  let data = "";

  resExample.on("data", (chunk) => {
    data += chunk;
  });

  resExample.on("end", () => {
    console.log(`Response from server: ${data}`);
  });

  resExample.on("error", (error) => {
    console.error(`Error making request: ${error.message}`);
  });
});

requestToExample.on("timeout", () => {
  console.error("Request timed out");
  // Handle timeout case (Unknown)
});

requestToExample.end();
