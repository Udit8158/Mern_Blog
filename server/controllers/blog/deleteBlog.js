import Blog from "../../models/Blog.js";

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { user } = req;

    // find and delete the blog if user allowed
    const blog = await Blog.findById(blogId);
    if (user.name === blog.author || user.isAdmin) {
      await Blog.deleteOne({ _id: blogId });
      return res.status(200).json({ message: "Deleted successfully" });
    }
    return res.status(403).json({ message: "You are not allowed to do this" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default deleteBlog;
