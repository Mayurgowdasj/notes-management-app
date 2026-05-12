const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')

// CREATE NOTE
router.post('/addNote', async(req, res)=>{
    try{
        const note = await Notes.create(req.body)
        res.status(201).json(note)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// GET ALL NOTES
router.get('/getNotes', async(req, res)=>{
    try{
        const notes = await Notes.find()
        res.status(200).json(notes)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// UPDATE NOTE
router.put('/updateNote/:id', async(req, res)=>{
    try{
        const updatedNote = await Notes.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(200).json(updatedNote)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// DELETE NOTE
router.delete('/deleteNote/:id', async(req, res)=>{
    try{
        await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'Note Deleted'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router