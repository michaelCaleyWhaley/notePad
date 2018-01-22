# notePad

## Command line node app
Makes use of built in Node module File System for saving and reading note data.
Also uses third party module Yargs for parsing arguments.

## Example commands
node app.js addNote --title="Example" --body="Some body"<br/>
node app.js deleteNote --title="Example"<br/>
node app.js readNote --title="Example"<br/>
node app.js listNote<br/>

## Alias commands

Yargs parsing adds the ability to use short hand commands enabling commands such as addNote to be passed like the following<br/>
node app.js addNote -t="Example" -b="Some body"