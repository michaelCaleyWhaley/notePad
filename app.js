

const fs = require('fs');
const argv = require('yargs');

const notes = require('./notes.js');

notes.addNote(argv.argv.message);

