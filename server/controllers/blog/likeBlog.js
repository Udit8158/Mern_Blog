import Blog from "../../models/Blog.js";

// It manage like and dislike of the blog
const likeBlog = async (req, res) => {
  try {
    const { user } = req;
    const { blogId } = req.params;

    // Find the blog
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Update the blog likes or dislikes according to the user already liked or not
    if (blog.likes.includes(user.name)) {
      blog.likes = blog.likes.filter((usr) => usr !== user.name);
    } else {
      blog.likes.push(user.name);
    }
    await blog.save();
    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default likeBlog;
