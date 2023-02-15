
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
module.exports = router;
router.get('/myprofile', withAuth, async (req, res) => {
     try {
          // projets for this user id user to id project
          const userData = await User.findByPk(req.session.user_id, {
               attributes: { exclude: ['password'] },
               include: [{ model: Project }],
          });
          const user = userData.get({ plain: true });
          res.render('profile', {
               ...user,
               logged_in: true
          });
     } catch (err) {
          res.status(500).json(err);
     }
});

