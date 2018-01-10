// console.log('notes.js');
// console.log(process);


module.exports.addNote = (message) => {
	fs.writeFile('message.txt', message, (err)=>{
		if(err) throw err;
		console.log('this file has been saved');
	});
}
