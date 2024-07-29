const os = require("os");

const osType = os.type();
console.log("OS Type:", osType);

const platform = os.platform();
console.log("Platform", platform);

const arch = os.arch();
console.log("Architecture:", arch);

const release = os.release();
console.log("Release Version:", release);

const cpus = os.cpus();
console.log("Number of CPU Cores:", cpus.length);
