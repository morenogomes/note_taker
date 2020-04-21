
const storage = require("../storage");
const router = ("express").Router();
// const router = express.Router();



//functionality to for getting notes from your 
  router.get("/notes", function(req, res) {
      storage
     .getNotes()
     .then((note) => res.json(note))
     .catch(err => res.status(500).json(err));
  });
//post similiar build to add notes
router.post("/notes", function(req, res) {
    storage
   .addNotes()
   .then((note) => res.json(note))
   .catch(err => res.status(500).json(err));
});
//
router.post("/notes", function(req, res) {
    storage
   .removeNotes()
   .then(() => res.json({ok: true}))
   .catch(err => res.status(500).json(err));
});


//delete to delete notes

module.exports = router;

