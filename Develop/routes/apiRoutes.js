const router = require('express').Router();
const { response } = require('express');
const { notes } = require('../db/db.json');
// const store = require('../db/store')

// /api/notes

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    notes.push(req.body)
    res.json(notes);
})

// add synchronously

// router.delete('/notes/:id', (req, res) => {
//     deleteNote(req.params.id)
//     .then(() => res.json({
//         ok: true
//     }))
//     .catch((err) => res.status(500).json(err)) 
// })


module.exports = router;