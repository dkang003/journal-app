const
    express = require('express'),
    entriesRouter = new express.Router(),
    Entry = require('../controllers/entryController')
    


// show all entries
entriesRouter.get('/', Entry.index);
// Show form to create entry.
entriesRouter.get('/new', Entry.new);
// show one entry
entriesRouter.get('/:id', Entry.show);
// create new entry
entriesRouter.post('/', Entry.create);
// Show form to edit entry
entriesRouter.get('/:id/edit', Entry.edit);
// update existing entry
entriesRouter.patch('/:id', Entry.update);
// delete existing entry
entriesRouter.delete('/:id', Entry.destroy);


module.exports = entriesRouter;