const express = require('express');
const Post = require('../models/post.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const path = req.params.id;
        const result = await Post.findOne(path);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.send(post);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
