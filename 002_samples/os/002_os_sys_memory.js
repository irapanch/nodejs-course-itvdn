const os = require("os");
const totalMemory = os.totalmem();
console.log("Total system memory:", formatBytes(totalMemory));

const freeMemory = os.freemem();
console.log("Free system memory:", formatBytes(freeMemory));

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}
