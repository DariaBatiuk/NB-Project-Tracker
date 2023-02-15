const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
     try {
          // Get all projects and JOIN with user data
          const projectData = await Project.findAll();
          // Serialize data so the template can read it
          const projects = projectData.map((project) => project.get({ plain: true }));
          // Pass serialized data and session flag into template
          console.log('==================================');
          console.log(projects);
          res.render('homepage', {projects});
     } catch (err) {
          res.status(500).json(err);
     }
}
);
// router.get('/', async (req, res) => {
//   // Send the rendered Handlebars.js template back as the response
//      res.render('homepage');
// });

module.exports = router;
