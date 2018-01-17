
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
		console.log('Note succesfully saved');
	} else {
		console.log('A matching title was found');
	}
};

var deleteNote = (title) => {
	var existingNotes;
	var noteRemoved = false;
	// Searches for the note data
	try {
		existingNotes = fs.readFileSync('notes-data.json');
		existingNotes = JSON.parse(existingNotes);

		// loops through the returned array looking for a matching title
		existingNotes.forEach((element) => {

			if(element.title.toLowerCase() === title.toLowerCase()){
				var index = existingNotes.indexOf(element);
				existingNotes.splice(index, 1);
				var newNotes = JSON.stringify(existingNotes);
				fs.writeFileSync('notes-data.json', newNotes);
				console.log('Note succesfully removed');
				noteRemoved = true;
			}

		});
	} catch(e) {
		console.log('Unable to find any notes');
	}

	if(noteRemoved === false){
		console.log('No note matching that title was found');
	}
}

module.exports = {
	addNote: addNote,
	deleteNote: deleteNote
}