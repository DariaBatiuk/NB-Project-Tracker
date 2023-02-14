const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const newPost = require('./newPost');
const apiRoutes = require('./api');
const myProfile = require('./myprofile');
const allPosts = require('./allposts');
router.use('/', homeRoutes);
router.use('/newpost', newPost);
router.use('/myprofile', myProfile)
router.use('/posts', allPosts)
router.use('/api' ,apiRoutes )
module.exports = router;
