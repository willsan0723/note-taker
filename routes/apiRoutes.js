const router = require('express').Router();
const { createNewNote, deleteNote } = require('../lib/notes');
const { notes } = require('../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = createNewNote(req.body, notes)
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
})


module.exports = router;