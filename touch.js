// for 6th command operation 

// 6.touch: Create a new empty file.


const fs = require('fs');

module.exports = {
    command: 'touch',
    describe: 'Create a new empty file',
    builder: {
      file: {
        describe: 'File path',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      fs.writeFileSync(argv.file, '');
      console.log(`File '${argv.file}' created.`);
    },
  };