const fs = require('fs');
const child_process = require('child_process');
const handle = () => {
  console.log('start exec cmd: git pull');
  child_process.execSync('git pull');
  console.log('git pull success');
  console.log('start exec cmd: npm run build');
  child_process.execSync('npm run build');
  console.log('npm run build success');
};
handle();
