// const storage = require("../db/storage");
const router = require("express").Router();
const storage = require("../db/storage");
// const uuidv4 = require('uuid/v4');

// const router = ("express").Router();
// const app = ('express').Router();
//functionality to for getting notes from your 
// app.get("/notes", function (req, res) {
router.get("/notes", function (req, res) {
    storage
    .getNotes()
    .then(note => res.json(note))
    .catch(err => res.status(500).json(err));
});
//post similiar build to add notes
// app.post("/notes", function (req, res) {
router.post("/notes", function (req, res) {
    storage
        .addNotes(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});
//
// app.post("/notes", function (req, res) {
router.delete("/notes:id", function (req, res) {
    storage
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


//delete to delete notes

module.exports = router;

