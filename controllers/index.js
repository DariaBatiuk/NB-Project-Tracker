const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const newPost = require('./newPost');
const apiRoutes = require('./api');
const myprofile = require('./profile');
const profilePublic = require('./publicProfile');

router.use('/', homeRoutes);
router.use('/newpost', newPost);
router.use('/api' ,apiRoutes );
router.use('/profile', myprofile)
router.use('/publicprofile', profilePublic)
    

module.exports = router;
