const router = require('express').Router();
const Op = require('sequelize').Op;

const { Project, User, Projecttouser } = require('../models');

router.get('/', async (req, res) => {
// send user data to the myprofile page to be displayed later
// if res.session is not defined, redirect to login page
if (!req.session.user) {
  res.redirect('/');
  return;
}


 try {
    const postsdata = await Project.findAll({ where: { github_repo: { [Op.like]: `%${req.session.user.login}%` } } });

    const posts = postsdata.map((post) => post.get({ plain: true }));

    res.render('myprofile', {
      posts , user: req.session.user });
  } catch (err) {
    res.status(500).json(err);
 }
});

module.exports = router;
