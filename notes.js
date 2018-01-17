
const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title: title,
		body: body
	};

	// searches for pre existing notes
	try {
		var existingNotes = fs.readFileSync('notes-data.json');
		notes = JSON.parse(existingNotes);
	} catch(e) {
		console.log('No existing notes found');
	}

	// filter runs on each item in the notes array. 
	// Creating a new array from items that match the condition
	// in this case any title which matches a pre existing title
	var duplicateNotes = notes.filter((item) => {
		return item.title === title;
	});

	// if duplicate notes is === 0 then the title is original and can be saved
	if(duplicateNotes.length === 0){
		notes.push(note);
		notes = JSON.stringify(notes);
		fs.writeFileSync('notes-data.json', notes);
	} else {
		console.log('A matching title was found');
	}
};

var deleteNote = (title) => {
	var existingNotes;
	try {
		existingNotes = fs.readFileSync('notes-data.json');
		existingNotes = JSON.parse(existingNotes);
	} catch(e) {
		console.log('Unable to find any notes');
	}
	console.log(existingNotes);
}

module.exports = {
	addNote: addNote,
	deleteNote: deleteNote
}