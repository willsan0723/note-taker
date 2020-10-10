const fs = require('fs');
const path = require('path');
const util = require('util');
const readDB = util.promisify(fs.readFile);
const writeDB = util.promisify(fs.writeFile);

class Store{
readFile(){
    return readDB(
    "./db/db.json",
    "utf8"
    )
}

write(note) {    
    return readDB(
        "./db/db.json",
        JSON.stringify(note)
    )
}

getNotes(){
    this.readFile().then(notes => {
        var parseNotes
        try{
            parseNotes = [].concat(JSON.parse(notes))            
        }
        catch(err){
            parseNotes = []
        }
        return parseNotes;
    })
}
//this.read
//concatenate notes sets it to an array


//addNotes function

//removeNotes function with a specific id

//readNotes
// look up read file async

}
module.exports = new Store();