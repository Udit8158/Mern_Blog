import Blog from "../../models/Blog.js";
import User from "../../models/User.js";

// It manage like and dislike of the blog
const likeBlog = async (req, res) => {
  try {
    const { user } = req;
    const { blogId } = req.params;

    // Find the blog
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const currUser = await User.findOne({ name: user.name });

    // Update the blog likes or dislikes according to the user already liked or not
    if (blog.likes.includes(user.name)) {
      blog.likes = blog.likes.filter((usr) => usr !== user.name);

      // Remove the blog from the list of likes of user
      currUser.likedBlogs = currUser.likedBlogs.filter(
        (blog) => blog._id != blogId
      );
    } else {
      blog.likes.push(user.name);

      // Add the blog to the list of likes of user
      currUser.likedBlogs.push(blog);
    }
    await blog.save();
    await currUser.save();

    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default likeBlog;
