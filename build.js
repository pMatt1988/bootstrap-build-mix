const {exec} = require('child_process');
let command = 'npx mix';
if (process.argv.indexOf('--watch') > -1) {
    command += ' watch';
}
if (process.argv.indexOf('--browserSync') > -1) {
    command = 'BROWSER_SYNC=true ' + command;
}

if(process.argv.indexOf('--production') > -1) {
    command += ' --production';
}

let execProcess = exec(command);

execProcess.stdout.on('data', (data) => {
    console.log(data);
});


