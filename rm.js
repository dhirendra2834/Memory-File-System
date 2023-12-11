// for 10th command operation 
// 10.rm: Remove a file or directory.

const fs = require('fs');
const path = require('path');

module.exports = {
    command: 'rm',
    describe: 'Remove a file or directory',
    builder: {
      path: {
        describe: 'File or directory path',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      const targetPath = path.resolve(argv.path);
      if (fs.existsSync(targetPath)) {
        if (fs.statSync(targetPath).isDirectory()) {
          fs.rmdirSync(targetPath, { recursive: true });
          console.log(`Directory '${argv.path}' removed.`);
        } else {
          fs.unlinkSync(targetPath);
          console.log(`File '${argv.path}' removed.`);
        }
      } else {
        console.log(`Path '${argv.path}' does not exist.`);
      }
    },
  };