const express = require('express')
const router = express.Router()
var db = require('../models')

// root route
router.get('/', (req, res) => {
  db.Skydive.find()
 .then((skydives) => {
   res.json(skydives)
 })
 .catch((err) => {
   res.send(err)
 })
})
// Post route
router.post('/', (req, res) => {
  db.Skydive.create(req.body)
  .then((newSkydive) => {
    res.status(201).json(newSkydive)
  })
.catch((err) => {
  res.send(err)
})
})

// show route
router.get('/:skydiveId', (req, res) => {
  db.Skydive.findById(req.params.skydiveId)
    .then((foundSkydive) => {
      res.json(foundSkydive)
    })
    .catch((err) => {
      res.send(err)
    })
})

// put route
router.put('/:skydiveId', (req, res) => {
  db.Skydive.findOneAndUpdate({_id: req.params.skydiveId}, req.body, {new: true})
  .then((skydive) => {
    res.json(skydive)
  })
  .catch((err) => {
    res.send(err)
  })
})

// delete route
router.delete('/:skydiveId', (req, res) => {
  db.Skydive.remove({_id: req.params.skydiveId})
    .then(() => {
      res.json({message: 'You have successfully deleted the booking'})
    })
    .catch((err) => {
      res.send(err)
    })
})

module.exports = router
