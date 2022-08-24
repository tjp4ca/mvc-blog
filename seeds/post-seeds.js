const { Post } = require('../models');

const postdata = [
    {
        title: 'fakeTitle1',
        user_id: 1
    },
    {
        title: 'fakeTitle2',
        user_id: 2
    },
    {
        title: 'fakeTitle3',
        user_id: 3
    },
    {
        title: 'fakeTitle4',
        user_id: 4
    },
    {
        title: 'fakeTitle5',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;