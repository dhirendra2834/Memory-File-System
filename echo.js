// for 7th command operation 

// 7.echo: Write text to a file. ex - echo 'I am "Finding" difficult to write this to file' > file.txt

const fs = require('fs');

module.exports = {
    command: 'echo',
    describe: 'Write text to a file',
    builder: {
      text: {
        describe: 'Text to write',
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
      fs.writeFileSync(argv.file, argv.text);
      console.log(`Text written to '${argv.file}'.`);
    },
  };