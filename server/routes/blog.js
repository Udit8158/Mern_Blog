import express from "express";
import { body } from "express-validator";
import addComment from "../controllers/blog/addComment.js";
import createBlog from "../controllers/blog/createBlog.js";
import deleteBlog from "../controllers/blog/deleteBlog.js";
import getAllBlogs from "../controllers/blog/getAllBlogs.js";
import getSingleBlog from "../controllers/blog/getSingleBlog.js";
import likeBlog from "../controllers/blog/likeBlog.js";
import updateBlog from "../controllers/blog/updateBlog.js";
import verifyToken from "../middlewares/verifyToken.js";

const blogRoute = express();

blogRoute
  .route("/")
  .get(verifyToken, getAllBlogs)
  .post(
    verifyToken,
    [
      body("title").isString().notEmpty().isLength({ min: 6, max: 100 }),
      body("content").isString().notEmpty().isLength({ min: 10, max: 10000 }),
    ],
    createBlog
  );

blogRoute
  .route("/:blogId")
  .get(verifyToken, getSingleBlog)
  .patch(
    verifyToken,
    [
      body("title").isString().notEmpty().isLength({ min: 6, max: 100 }),
      body("content").isString().notEmpty().isLength({ min: 10, max: 10000 }),
    ],
    updateBlog
  )
  .delete(verifyToken, deleteBlog);

// Like and dislike of the blog
blogRoute.route("/:blogId/like").get(verifyToken, likeBlog);
blogRoute
  .route("/:blogId/comment")
  .post(
    verifyToken,
    [body("text").isString().isLength({ min: 3, max: 100 })],
    addComment
  );

export default blogRoute;
