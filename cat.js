// for 5th command operation 

// 5.cat: Display the contents of a file.

const fs = require('fs');
 
module.exports = {
  command: 'cat',
  describe: 'Display the contents of a file',
  builder: {
    file: {
      describe: 'File path',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const fileContent = fs.readFileSync(argv.file, 'utf8');
    console.log(`Contents of '${argv.file}':`);
    console.log(fileContent);
  },
};
