const cluster = require("cluster");
const os = require("os");
const chalk = require("chalk");

function logWorker(pid, text) {
  console.log(`${chalk.yellow(`[Worker PID ${pid}]:`)} ${text}`);
}

if (cluster.isPrimary) {
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus - 1; i++) {
    const worker = cluster.fork();
    worker.on("exit", () => {
      logWorker(worker.id, "exited");
      logWorker(worker.id, "rebooting...");
      cluster.fork();
    });
  }
}

if (cluster.isWorker) {
  logWorker(process.pid, "started");
  require("./server");
}
