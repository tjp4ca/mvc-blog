const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {

    User.findAll({
        attributes: { exclude: ['password'] }
    })

    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one user by its id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post
            },
            {
                model: Comment
            }
        ]
        
    })

    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a new user
router.post('/', (req, res) => {

    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(userData => res.json(userData))  
});

// delete users by id
router.delete('/:id', (req, res) => {

    User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(userData => res.json(userData))  
});

module.exports = router;
