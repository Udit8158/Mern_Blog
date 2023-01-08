import { validationResult } from "express-validator";
import Blog from "../../models/Blog.js";

const createBlog = async (req, res) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    // Creates a new blog post
    const newBlogPost = await new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user.name,
      coverPicture: req.body.coverPicture ? req.body.coverPicture : "",
      catagories: req.body.catagories ? req.body.catagories : [],
    });
    await newBlogPost.save();

    return res.status(201).json(newBlogPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createBlog;
