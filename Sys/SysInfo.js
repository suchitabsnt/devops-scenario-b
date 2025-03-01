const os = require("os");

function getSystemInfo() {
    return {
        hostname: os.hostname(),
        osType: os.type(),
        platform: os.platform(),
        architecture: os.arch(),
        uptime: `${Math.floor(os.uptime() / 3600)}h ${Math.floor((os.uptime() % 3600) / 60)}m`,
        totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        cpuLoad: os.loadavg().map(load => load.toFixed(2)), // 1, 5, 15 min load average
        cpuCores: os.cpus().length
    };
}

// Print system information
console.log("🖥️ System Information:");
console.table(getSystemInfo());

// Export function for testing
module.exports = getSystemInfo;

