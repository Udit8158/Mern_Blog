import Blog from "../../models/Blog.js";

const updateBlog = async (req, res) => {
  try {
    // taking updateable parameters
    const { title, content, catagories } = req.body;
    const { blogId } = req.params;
    const { user } = req;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    // Update the blog
    if ((title, content, catagories)) {
      const blog = await Blog.findById(blogId);
      if (user.name === blog.author || user.isAdmin) {
        await Blog.updateOne({ _id: blogId }, { title, content, catagories });
        return res.status(200).json({ message: "Updated successfully" });
      }
      return res
        .status(403)
        .json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default updateBlog;
