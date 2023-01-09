import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import Blog from "../../models/Blog.js";

const addComment = async (req, res) => {
  try {
    const { user } = req;
    const { blogId } = req.params;
    const { text } = req.body;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "No blog found" });

    // create a comment and push to the blog
    const comment = { id: uuidv4(), text, author: user.name };
    blog.comments.push(comment);
    await blog.save();

    return res.status(201).json({ message: "Comment added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default addComment;
