const exec = require('./libs/execute-sync-command');
const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

if (!appsDir) {
  process.exit();
}

console.log({
  appsDir,
  environment
});

exec(`ls ${appsDir}`, {
  stdio: [0, 1, 2]
});