
const fs = require('fs');
const argv = require('yargs');
const notes = require('./notes.js');

var parsedArgv = argv.argv;

if (parsedArgv._[0] === "addNote") {
	notes.addNote(parsedArgv.title, parsedArgv.body);
} else if (parsedArgv._[0] === "deleteNote") {
	console.log('note deleted');
} else if(parsedArgv._[0] === "listNote"){
	console.log('listing notes');
} else if(parsedArgv._[0] === "readNote"){
	console.log('reading notes');
} else {
	console.log('Command not recognised');
	console.log('Options include: addNote, deleteNote, listNote, readNote');
	console.log('Syntax = node app.js addNote --title=Gladiator --body="Some body"');
}
