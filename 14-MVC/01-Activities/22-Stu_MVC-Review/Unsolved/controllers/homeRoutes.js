const router = require('express').Router();
const { user } = requier('../moders');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await User.findAll({
    attributes: { exclude: ['password']},
    order: [['name', 'ASC']]  // ASC means ascending order AKA alphabetic order
  })

  const users = userData.map((user) => user.get({ plain: true}))
  res.render('homepage', { users });
});

module.exports = router;
