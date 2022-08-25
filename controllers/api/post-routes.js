const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: Comment
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })

    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Comment
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })

    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})

module.exports = router;