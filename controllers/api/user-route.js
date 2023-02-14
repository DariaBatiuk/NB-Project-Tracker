const router = require('express').Router();

router.post('/newpost', async (req, res) => {
const { title, description, skills, github_repo, date_created, email } = req.body;
  Project.create({ title, description, skills, github_repo, date_created, email })
    .then(post => {
      res.redirect(`/projects/${project.id}`);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get('/user/:name', (req, res) => {
    const name = req.params.name;
    User.findOne({ where: { github_id: name } })
      .then(user => {
        res.render('profile', { user });
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
 });

module.exports = router;
