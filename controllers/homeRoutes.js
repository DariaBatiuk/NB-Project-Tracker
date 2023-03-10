const router = require('express').Router();
const { User, Project, Projecttouser } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  // res.render('homepage', {
  //    user: req.session.user,
  //  });
  try {
    const projectData = await Project.findAll(
         {
         attributes: ['id_project', 'title', 'description', 'github_repo', 'skills', 'data_created', 'email'],
         include: {
              model: User,
              attributes: ['id_user', 'username', 'github_id']
         }
         }
         );
         console.log('=====================================================');
         console.log(projectData);
         console.log('=====================================================');

    const projects = projectData.map((project) => project.get({ plain: true }));
    console.log('=====================================================');
    // console.log(projects);
    console.log('=====================================================');
    res.render('homepage', { projects, user: req.session.user});
    } catch (err) {
    console.error(err);
    res.status(500).json(err);
    }
  });

module.exports = router;
