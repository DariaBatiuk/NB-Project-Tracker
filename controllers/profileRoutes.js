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
