
const fs = require('fs');
const argv = require('yargs');
const notes = require('./notes.js');

var parsedCommand = argv.argv._[0];

if (parsedCommand === "addNote") {
    console.log('note added');
} else if (parsedCommand === "deleteNote") {
    console.log('note deleted');
}
