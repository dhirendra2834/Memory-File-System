// for 8th command operation 

// 8.mv: Move a file or directory to another location. ex - mv /data/ice_cream/cassata.txt ./data/boring/ice_cream/mississippimudpie/

const fs = require('fs');

module.exports = {
    command: 'mv',
    describe: 'Move a file or directory to another location',
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
      fs.renameSync(argv.source, argv.destination);
      console.log(`Moved '${argv.source}' to '${argv.destination}'.`);
    },
  }