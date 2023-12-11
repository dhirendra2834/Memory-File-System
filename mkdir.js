// for 1ST  command operation 

// 1.mkdir: Create a new directory.

const fs = require('fs');

module.exports = {
  command: 'mkdir',
  describe: 'Create a new directory',
  builder: {
    directory: {
      describe: 'Directory path',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    fs.mkdirSync(argv.directory, { recursive: true });
    console.log(`Directory '${argv.directory}' created.`);
  },
};
