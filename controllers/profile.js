const router = require('express').Router();

const { Project, User, Projecttouser } = require('../models');

router.get('/', async (req, res) => {
 try {
    const postsdata = await Project.findAll()

    const posts = postsdata.map((post) => post.get({ plain: true }));

    res.render('myprofile', {
      posts});
  } catch (err) {
    res.status(500).json(err);
 }
});

module.exports = router;
