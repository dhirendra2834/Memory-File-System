// for 9th command operation 

// 9.cp: Copy a file or directory to another location. ex - cp /data/ice_cream/cassata.txt . **. For current directory **

const fs = require('fs');
const path = require('path');

module.exports ={
    command: 'cp',
    describe: 'Copy a file or directory to another location',
    builder: {
      source: {
        describe: 'Source path',
        demandOption: true,
        type: 'string',
      },
      destination: {
        describe: 'Destination path',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      const source = path.resolve(argv.source);
      const destination = path.resolve(argv.destination);
      fs.copyFileSync(source, destination);
      console.log(`Copied '${argv.source}' to '${argv.destination}'.`);
    },
  }