const router = require("express").Router();
const storage = require("../db/storage");


router.get("/notes", function (req, res) {
    storage
    .getNotes()
    .then(note => res.json(note))
    .catch(err => res.status(500).json(err));
});

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



module.exports = router;

