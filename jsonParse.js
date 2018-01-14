const fs = require('fs');

var originalNote = {
	title: 'Gladiator',
	body: 'Roman army'
};
// JSON.stringify converts data to JSON/string
originalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNote);


var noteString = fs.readFileSync('notes.json');
// JSON.parse reads string and turns back into OBJECTS
var note = JSON.parse(noteString);
console.log(note);