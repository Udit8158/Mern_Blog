import Blog from "../../models/Blog.js";

const getAllBlogs = async (req, res) => {
  const catName = req.query.cat;

  // Check search only for a certain category
  if (catName) {
    // Filter by category
    const filteredBlogs = await Blog.find({ catagories: { $in: catName } });
    if (filteredBlogs.length === 0)
      return res
        .status(404)
        .json({ message: "No Blogs found! in this catagory" });

    return res.status(200).json(filteredBlogs);
  }

  // And when searching for all blog
  const blogs = await Blog.find({});
  if (blogs.length === 0)
    return res.status(404).json({ message: "No Blogs found!" });

  return res.status(200).json(blogs);
};

export default getAllBlogs;
