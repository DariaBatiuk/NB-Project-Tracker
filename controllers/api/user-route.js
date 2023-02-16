const router = require('express').Router();
const { User, Project } = require('../../models');

router.post('/newpost', (req, res) => {
     Project.create({ 
          title: "newProject", 
          description: "blah blah blah", 
          github_repo: "github_repo_newProject", 
          skills: "skills for new Project", 
          email: "blahemail@jj.com" })
     .then(data=> res.render('addpost', {data}))
});
router.put('/edit/:id', (req, res) => {
     console.log(req.params.id)
     Project.update({
          title: 'newTitleAfterUpdate',
          description: 'newDescriptionAfterUpdate'
          }, {
          where: { id_project: req.params.id }})
          .then(dbPostData => {
               if (!dbPostData) {
                    res.status(404).json({ message: 'No post found with this id' });
                    return;
               }
        // serialize the data
          // const project = dbPostData.get({ plain: true });
          // console.log(project);
          res.render('editablepost', 
               // logged_in: true
)})
     .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
});

router.get('/:name', async (req, res) => {
     const name = req.params.name;
     await User.findOne({
          where: { github_id: name },
          attributes: ['id_user', 'username', 'github_id'],
          include: [{
               model: Project,
               attributes: ['id_project', 'title', 'description'],
               through: { attributes: [] } // This line removes the join table attributes from the result
          }]
     })
     .then(user => {
          if (!user) {
             // Handle case where user is not found
               res.sendStatus(404);
               return;
          }
          const userData = user.get({ plain: true });
          console.log(userData);
          res.render('myprofile', { user: userData });
     })
     .catch(error => {
          console.error(error);
          res.sendStatus(500);
     });
});
module.exports = router;