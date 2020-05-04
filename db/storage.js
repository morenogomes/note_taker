// const uuidv4 = require('uuid/v4'); 
// const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const util = require("util");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Storage {
    constructor() {
      this.lastId = 0;
    }
  
    read() {
      return readFileAsync("db/db.json", "utf8");
    }
  
    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    }
  
    getNotes() {
      return this.read().then(notes => {
        let parsedNotes;
  
        // If notes isn't an array or can't be turned into one, send back a new empty array
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
  
        return parsedNotes;
      });
    }
  
    addNotes(note) {
      const { title, text } = note;
  
      if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
      }
  
      // Increment `this.lastId` and assign it to `newNote.id`
      const newNote = { title, text, id: this.lastId++ };
  
      // Get all notes, add the new note, write all the updated notes, return the newNote
      return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);
    }
  
    removeNotes(id) {
      // console.log(`this is id${id}`);
      // Get all notes, remove the note with the given id, write the filtered notes
      return this.getNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(filteredNotes => this.write(filteredNotes));
        }
      }


module.exports = new Storage();
