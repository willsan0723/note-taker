const router = require('express').Router();
const {notes} = require('../db/db.json');

router.get('/notes', (req, res) => {
    let display = notes;
    res.json(display);
})

router.post('/notes', (req, res) => {
    saveNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err)) 
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id)
    .then(() => res.json({
        ok: true
    }))
    .catch((err) => res.status(500).json(err)) 
})


module.exports = router;