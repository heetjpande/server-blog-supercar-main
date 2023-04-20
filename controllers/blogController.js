const { Comment, Blog } = require("../models");
const { Op } = require("sequelize");

class EventController {
  static async fetchDataBlog(req, res) {
    try {
      let offset = 0;
      let limit = 4;
      const { page, title } = req.query;
      if (page) offset = page * limit - limit;
      let condition = {};
      if (title) condition.title = { [Op.iLike]: `${title}%` };
      let dataBlog = await Blog.findAndCountAll({
        limit,
        offset,
        where: condition,
        order: [["id", "ASC"]],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        }
      });
      let totalPage = Math.ceil(dataBlog.count / limit)
      dataBlog = { totalPage, ...dataBlog }
      res.status(200).json(dataBlog);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
  static async getBlogById(req, res, next) {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findByPk(blogId, {
        include: {
          model: Comment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
      });
      if(!blog) throw ({name: "Blog Not Found"})
      res.status(200).json(blog);
    } catch (err) {
      next(err);
    }
  }

  static async fetchMyBlog(req, res, next) {
    try {
      // const { userId } = req.params;
      const blog = await Blog.findAll({
        where: { UserId: +req.user.id },
        include: {
          model: Comment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
      });
      if(!blog) throw ({name: "Blog Not Found"})
      res.status(200).json(blog);
    } catch (err) {
      next(err);
    }
  }

  static async createBlog(req, res, next) {
    try {
      let { title, content } = req.body;
      let UserId = req.user.id;
      const imgUrl = req.body.imgUrl ? req.body.imgUrl : "https://www.belfercenter.org/themes/belfer/images/event-default-img-med.png";
      let result = await Blog.create({title, content, imgUrl, UserId})
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async updateBlog(req, res, next) {
    try {
      let { title, content, imgUrl } = req.body;
      let { blogId } = req.params;
      let condition = {}
      if (title) condition.title = title;
      if (content) condition.content = content;
      if (imgUrl) condition.imgUrl = imgUrl;
      let data = await Blog.update(
        condition,
        {
            where: { id: +blogId },
            returning: true,
        }
    );
    res.status(200).json({ message: `Success update ${data[1][0].dataValues.title}` });
    } catch (err) {
      next(err);
    }
  }

  static async deleteBlog(req, res, next) {
    try {
      let { blogId } = req.params;
      await Blog.destroy({ where: { id: +blogId } });
      res.status(200).json({ message: "Your blog has been deleted" });
    } catch (err) {
      next(err);
    }
  }

  static async createComment(req, res, next) {
    try {
      let { blogId } = req.params;
      let { comment } = req.body
      const foundBlog = await Blog.findByPk(blogId)
      if(!foundBlog) throw ({name: "Blog Not Found"})
      const newComment = await Comment.create({
        comment,
        BlogId: +blogId,
        UserId: +req.user.id,
        username: req.user.username
      });
      res.status(201).json({ comment: newComment.comment, BlogId: newComment.BlogId, UserId: newComment.UserId });
    } catch (err) {
      next(err);
    }
  }

  static async deleteComment(req, res, next) {
    try {
      let { commentId } = req.params;
      const foundComment = await Comment.findByPk(commentId)
      if(!foundComment) throw ({name: "Comment Not Found"})
      const foundBlog = await Blog.findByPk(foundComment.BlogId)
      if(+req.user.id != foundBlog.UserId && +req.user.id != foundComment.UserId) throw { name: "Access Denied" };
      await Comment.destroy({ where: { id: +commentId } });
      res.status(200).json({message: `Comment has been deleted`});
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EventController;