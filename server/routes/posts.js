let express = require("express");
let router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment")

//Get posts from the database
router.get("/posts/list", async (req, res, next) => {
    await Post.find({}).then((posts) => {
        //If posts are not found, respond with an error
        if (!posts) {
            return res.status(404).json({ message: "Posts not found" })
        } else {
            //If posts are found, respond with collection of posts
            return res.json(posts)
        }
    })
});

//POST route for posting posts
router.post("/posts/post", async (req, res, next) => {
    await User.findOne({ _id: req.body.userID }).then((user) => {
        //If user is found, then create new post for the user and save it into the database
        if (user) {
            const newPost = new Post({
                author: user.username,
                post: req.body.post,
            })
            newPost.save().then(() => {
                return res.json({ message: "Posted!" })
            }).catch((err) => {
                console.log(err)
            })
            //If user is not found, respond with an error
        } else {
            return res.status(404).json({ message: "Not found" })
        }
    })
});

//GET route for comments
router.get("/posts/commentsList", async (req, res, next) => {
    //Find comments in the database
    await Comment.find({}).then((comment) => {
        if (!comment) {
            return res.status(404).json({ message: "No comments found" })
        } else {
            return res.json(comment)
        }
    })
})

//POST route for comments
router.post("/posts/comments", async (req, res, next) => {
    //Find user based on the user ID on the comment body
    await User.findOne({ _id: req.body.userID }).then((name) => {
        //Create new comment
        const newComment = new Comment({
            id: req.body.id,
            comment: req.body.comment,
            author: name.username
        })
        newComment.save().then(() => {
            return res.json({ message: "Commented!" })
        }).catch((err) => {
            console.log(err)
        })
    })
})

module.exports = router;