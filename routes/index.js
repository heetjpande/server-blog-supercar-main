const router = require("express").Router();
const UserController = require("../controllers/userController");
const BlogController = require("../controllers/blogController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const errorHandler = require("../middlewares/errorHandler");
const uploadimage = require('../middlewares/multer')
const imageKit = require('../middlewares/imageKit')
const imageValidation = require('../middlewares/imageValidation')

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/blogs", BlogController.fetchDataBlog)
router.get("/blogs/:blogId", BlogController.getBlogById)

router.use(authentication);

router.get("/myblogs", BlogController.fetchMyBlog)
router.post("/blogs", uploadimage, imageValidation, imageKit, BlogController.createBlog);
router.post("/comments/:blogId", BlogController.createComment);
router.put("/blogs/:blogId", authorization, uploadimage, imageValidation, imageKit, BlogController.updateBlog);
router.delete("/blogs/:blogId", authorization, BlogController.deleteBlog);
router.delete("/comments/:commentId", BlogController.deleteComment);

router.use(errorHandler);

module.exports = router;