const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const Page = require('../models/Page')

// create page route

router.post('/', async (req, res) => {
    const page = new Page({
        page: req.body.page
    });
    const val=await page.save();
    res.json(val);
    console.log(val)
});
/*
// POST User
router.post('/', (req, res, next) => {
    const page = new Page({
      _id: new mongoose.Types.ObjectId(),
      page: req.body.page,
    })
    page
      .save()
      .then((result) => {
        console.log(result)
        res.status(201).json({
          message: 'page created successfully!',
          pageCreated: {
            _id: result._id,
            page: result.page,
          },
        })
      })
      .catch((err) => {
        console.log(err),
          res.status(500).json({
            error: err,
          })
      })
  })
*/
// get page 
router.get('/', async (req, res) => {
    try{
        const page = await Page.find();
            res.json(page);
    }   catch(err){
            res.json({message: err});
    }
});
module.exports = router