

const argv = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	// requires the title
	demand: true,
	alias: 't'
};
// chaining methods
var parsedArgv = argv
	.command('addNote', 'Add a new note', {
		title: titleOptions,
		body: {
			describe: 'Body of the note',
			demand: true,
			alias: 'b'
		}
	})
	.command('deleteNote', 'Delete a note', {
		title: titleOptions
	})
	.command('ListNote', 'List all notes')
	.command('readNote', 'Read a note', {
		title: titleOptions
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
