import Blog from "../../models/Blog.js";
import User from "../../models/User.js";

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { user } = req;

    // find and delete the blog if user allowed
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Not Found" });
    if (user.name === blog.author || user.isAdmin) {
      await Blog.deleteOne({ _id: blogId });

      // Delete the blog post to the user's creation
      const currUser = await User.findOne({ name: user.name });
      currUser.blogs = currUser.blogs.filter((blog) => blog._id != blogId);
      await currUser.save();

      return res.status(200).json({ message: "Deleted successfully" });
    }

    return res.status(403).json({ message: "You are not allowed to do this" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default deleteBlog;
