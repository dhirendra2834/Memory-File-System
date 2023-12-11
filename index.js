#!/usr/bin/env node

const fs = require('fs');
// const path = require('path');
const yargs = require('yargs');
const mkdirCommand = require('./mkdir');
const cdCommand = require('./cd');
const lsCommand = require('./ls');
const grepCommand = require('./grep');
const catCommand = require('./cat');
const touchCommand = require('./touch');
const echoCommand = require('./echo');
const mvCommand = require('./mv');
const cpCommand = require('./cp');
const rmCommand = require('./rm');


yargs  
// for 1st operation "mkdir"
  .command(mkdirCommand)
  // for 2nd operation "cd"
  .command(cdCommand)
  // for 3rd operation "ls"
  .command(lsCommand)
  // for 4th operation "grep" search pattern
  .command(grepCommand)
  // for 5th operation "cat"shown content of file
  .command(catCommand)
  // for 6th operation "touch" create empty file
  .command(touchCommand)
  // for 7th operation "echo" content write inside file
  .command(echoCommand)
  // for 8th operation "mv"  move file 1st  location to 2nd location 
  .command(mvCommand)
  // for 9th operation "cp"  copy file 1st location to 2nd location
  .command(cpCommand)
// for 10th operation "rm"  remove file 
  .command(rmCommand)

  .help()
  .argv;
