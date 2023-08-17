const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController')

//api endpoints
router.post("/createBlog", blogsController.createBlog);

router.get("/readBlog", blogsController.readBlog);

router.post("/updateBlog/:id", blogsController.updateBlog);

router.get("/deleteBlog/:id", blogsController.deleteDelete);



module.exports = router;