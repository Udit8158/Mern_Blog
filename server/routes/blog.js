import express from "express";
import { body } from "express-validator";
import createBlog from "../controllers/blog/createBlog.js";
import getAllBlogs from "../controllers/blog/getAllBlogs.js";
import verifyToken from "../middlewares/verifyToken.js";

const blogRoute = express();

blogRoute
  .route("/")
  .get(verifyToken, getAllBlogs)
  .post(
    verifyToken,
    [
      body("title").isString().notEmpty().isLength({ min: 6, max: 30 }),
      body("content").isString().notEmpty().isLength({ min: 10, max: 1000 }),
    ],
    createBlog
  );

export default blogRoute;
