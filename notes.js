
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
	var existingNotes = fetchNotes();
	var noteRemoved = false;
	// loops through the returned array looking for a matching title
	existingNotes.forEach((element) => {
		if (element.title.toLowerCase() === title.toLowerCase()) {
			var index = existingNotes.indexOf(element);
			existingNotes.splice(index, 1);
			saveNotes(existingNotes);
			console.log('Note succesfully removed');
			noteRemoved = true;
		}
	});
	if (noteRemoved === false) {
		console.log('No note matching that title was found');
	}
};

module.exports = {
	addNote: addNote,
	deleteNote: deleteNote
};