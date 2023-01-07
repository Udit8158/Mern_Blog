const logOut = (req, res) => {
  res
    .clearCookie("mern_blog_refresh_token")
    .json({ message: "Successfully logged out" });
};

export default logOut;
