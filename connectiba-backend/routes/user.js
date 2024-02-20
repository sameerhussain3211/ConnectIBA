const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const postController = require('../controllers/posts')
const aboutController = require('../controllers/about');


// USER routes
router.get('/', userController.getTest);
router.get('/profile/:erp_id', userController.getProfile);
router.post('/search', userController.searchUser);


// POSTS ROUTES
router.get("/posts/:roomId", postController.getPosts);
router.post("/post", postController.createPost);
router.get("/single-post/:postId", postController.getSinglePosts);

router.post("/comments", postController.updateComments);
router.post("/likes", postController.updateLikes);
router.get("/likes", postController.getLikes);
router.get("/comments", postController.getComments);


// USER DETAILS ROUTES

router.post("/jobs", aboutController.postJobs);
router.get("/jobs", aboutController.getJobs);






module.exports = router; 