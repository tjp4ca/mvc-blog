const { Comment } = require('../models');

const commentdata = [
    {
        content: 'fakeContent1',
        user_id: 1,
        post_id: 1
    },
    {
        content: 'fakeContent2',
        user_id: 2,
        post_id: 2
    },
    {
        content: 'fakeContent3',
        user_id: 3,
        post_id: 3
    },
    {
        content: 'fakeContent4',
        user_id: 4,
        post_id: 4
    },
    {
        content: 'fakeContent5',
        user_id: 5,
        post_id: 5
    },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;