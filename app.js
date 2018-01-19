

const argv = require('yargs');
const notes = require('./notes.js');

// chaining methods
var parsedArgv = argv
	.command('addNote', 'Add a new note', {

	})
	.help()
	.argv;

if (parsedArgv._[0] === "addNote") {
	notes.addNote(parsedArgv.title, parsedArgv.body);
} else if (parsedArgv._[0] === "deleteNote") {
	notes.deleteNote(parsedArgv.title);
} else if (parsedArgv._[0] === "listNote") {
	notes.listNote();
} else if (parsedArgv._[0] === "readNote") {
	notes.readNote(parsedArgv.title);
} else {
	console.log('Command not recognised');
	console.log('Options include: addNote, deleteNote, listNote, readNote');
	console.log('Syntax = node app.js addNote --title=Gladiator --body="Some body"');
}
