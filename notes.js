
const fs = require('fs');

var fetchNotes = () => {
	// searches for pre existing notes
	try {
		var existingNotes = fs.readFileSync('notes-data.json');
		return JSON.parse(existingNotes);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	notes = JSON.stringify(notes);
	fs.writeFileSync('notes-data.json', notes);
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title: title,
		body: body
	};
	// filter runs on each item in the notes array. // Creating a new array from items that match the condition // in this case any title which matches a pre existing title
	var duplicateNotes = notes.filter((item) => {
		return item.title === title;
	});
	// if duplicate notes is === 0 then the title is original and can be saved
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		console.log('Note succesfully saved');
	} else {
		console.log('A matching title was found');
	}
};

var deleteNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((index) => {
		return index.title.toLowerCase() !== title.toLowerCase();
	});
	if (notes.length > filteredNotes.length) {
		saveNotes(filteredNotes);
		console.log('Note successfully deleted');
	} else {
		console.log('Note not found');
	}
};

var readNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((index) => {
		return index.title.toLowerCase() === title.toLowerCase();
	});
	if (filteredNotes.length > 0) {
		console.log(`Title: ${filteredNotes[0].title}`);
		console.log(`Body: ${filteredNotes[0].body}`);
	} else {
		console.log('Note not found');
	}

};

var listNote = () => {
	var notes = fetchNotes();
	console.log(`Printing: ${notes.length} note(s).`);
	console.log('--');
	notes.forEach((index) => {
		console.log(`${index.title} - ${index.body}`);
		console.log('--');
	});
};

module.exports = {
	addNote: addNote,
	deleteNote: deleteNote,
	//es6 does not reuire function name if it is the same as object property
	readNote,
	listNote
};