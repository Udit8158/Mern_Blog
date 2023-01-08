import Blog from "../../models/Blog.js";

const getSingleBlog = async (req, res) => {
  const { blogId } = req.params;

  if (!blogId) return res.status(400).json({ error: "Invalid blog id" });

  const blog = await Blog.findById(blogId);
  if (!blog) return res.status(404).json({ error: "No such blog" });

  return res.status(200).json(blog);
};

export default getSingleBlog;
