// This js file is Used for 'cd' command  operation 


//2. cd: Changes the current directory. Support navigating to the parent directory using .., moving to the root directory using /, and navigating to a specified absolute path. Basically anything that you can do in a normal terminal. Since there is no user level implementation, ~ and / should take you to root.

const process = require('process');

module.exports = {
  command: 'cd',
  describe: 'Change the current directory',
  builder: {
    directory: {
      describe: 'Directory path',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    process.chdir(argv.directory);
    console.log(`Current directory changed to '${process.cwd()}'`);
  },
};
