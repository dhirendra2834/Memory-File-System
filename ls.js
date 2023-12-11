// for 3rd  command operation 


// 3.ls: List the contents of the current directory or a specified directory.

const fs = require('fs');



module.exports = {
  command: 'ls',
  describe: 'List the contents of the current directory or a specified directory',
  builder: {
    directory: {
      describe: 'Directory path',
      demandOption: false,
      type: 'string',
    },
  },
  handler: (argv) => {
    const targetDirectory = argv.directory || '.';
    const files = fs.readdirSync(targetDirectory);
    files.forEach((file) => console.log(file));
  },
};
