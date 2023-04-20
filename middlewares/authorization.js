const { Blog } = require("../models");
const userValidation = async (req, res, next) => {
  try {
    let UserId = req.user.id;
    let { blogId } = req.params;
    const foundBlog = await Blog.findByPk(blogId);
    if (!foundBlog) throw ({ name: "Blog Not Found" })
    if (foundBlog.UserId != UserId) throw { name: "Access Denied" };
    if (foundBlog && foundBlog.UserId == UserId) next();
  } catch (error) {
    next(error)
  }
};

module.exports = userValidation;
