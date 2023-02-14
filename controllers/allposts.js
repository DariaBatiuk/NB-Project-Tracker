const { Project, User } = require('../models');

const router = require('express').Router();
router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
   try {
    const postData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('allposts', { posts });
  } catch (err) {
        res.status(500).json(err);
        }
    });

  
  module.exports = router;
  