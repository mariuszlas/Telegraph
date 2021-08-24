const express = require('express');
const Post = require('../models/post.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const path = req.params.id;
        const result = await Post.findOne(path);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).send(post);
    } catch (err) {
        res.status(422).send(err);
    }
});

module.exports = router;
