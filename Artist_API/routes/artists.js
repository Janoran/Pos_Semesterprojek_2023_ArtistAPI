const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

//Getting all
router.get('/',async (req,res)=>{
    try {
        const artists = await Artist.find()
        res.json(artists)
    } catch (err)
    {
        res.status(500).json({message:err.message})
    }
    req.artist = Artist
})

//Getting One
router.get('/:id',getArtist,(req,res)=>{
    res.json(res.artist.name)
})

//Creating One
router.post('/', async (req,res)=>{
    console.log(req.body.albums);
    const artist = new Artist({
        name: req.body.name,
        genre: req.body.genre,
        singles: req.body.singles,
        albums: req.body.albums
        
    })
    try {
        const newArtist = await artist.save()
        //201 bestätigung dass das Objekt erstellt werden konnte
        res.status(201).json(newArtist)
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
   
})

//Updating One, mit Patch wird nur die jeweilige angegeben Information geändert anstatt dass alles wie bei Put nochmal geändert wird

router.delete('/:id',getArtist, async (req,res)=>{
    try {
        await res.artist.deleteOne()
        res.json({message: "Artist gelöscht"})
    } catch (err)
    {
        res.status(500).json({message: err.message})
    }
})

// Updating One
router.put('/:id', getArtist, async (req, res) => {
    if (req.body.name != null) {
      res.artist.name = req.body.name;
    }
    if (req.body.genre != null) {
      res.artist.genre = req.body.genre;
    }
    if (req.body.singles != null) {
      res.artist.singles = req.body.singles;
    }
    if (req.body.albums != null) {
      res.artist.albums = req.body.albums;
    }
    try {
      const updatedArtist = await res.artist.save();
      res.json(updatedArtist);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  


async function getArtist(req,res,next)
{
    let artist
    try {
        artist = await Artist.findById(req.params.id)
        if(Artist == null)
        {
            return res.status(404).json({message: "Cannot find Artist"})
        }
    }catch (err)
    {
        return res.status(500).json({message:err.message})
    }
    res.artist = artist
    next()
}

module.exports = router