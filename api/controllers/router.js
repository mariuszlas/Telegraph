const express = require('express');
const Post = require('../models/post.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to telegraph');
})

// route for getting a post by id
router.get('/:id', async (req, res) => {
    try {
        const path = req.params.id;
        const result = await Post.findOne(path);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send(err);
    }
});

// route for adding a new post
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).send(post);
    } catch (err) {
        res.status(422).send(err);
    }
});

module.exports = router;
