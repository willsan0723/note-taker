const router = require('express').Router();
const {notes} = require('../db/db.json');
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes().then(notes => {
        res.json(notes);
    }).catch(err => {
        console.log(notes);
        res.status(500).json(err)
    })
    // let display = notes;
    // res.json(display);
})


// router.post('/notes', (req, res) => {
//     saveNote(req.body)
//     .then((note) => res.json(note))
//     .catch((err) => res.status(500).json(err)) 
// })

// router.delete('/notes/:id', (req, res) => {
//     deleteNote(req.params.id)
//     .then(() => res.json({
//         ok: true
//     }))
//     .catch((err) => res.status(500).json(err)) 
// })


module.exports = router;