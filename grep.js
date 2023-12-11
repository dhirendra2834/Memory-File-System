// for 4th command operation 

// 4.grep: Search for a specified pattern in a file.

const fs = require('fs');

module.exports = {
  command: 'grep',
  describe: 'Search for a specified pattern in a file',
  builder: {
    pattern: {
      describe: 'Pattern to search',
      demandOption: true,
      type: 'string',
    },
    file: {
      describe: 'File path',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const fileContent = fs.readFileSync(argv.file, 'utf8');
    const matches = fileContent.match(new RegExp(argv.pattern, 'g'));
    console.log(`Matches for pattern '${argv.pattern}' in '${argv.file}':`);
    console.log(matches);
  },
};
