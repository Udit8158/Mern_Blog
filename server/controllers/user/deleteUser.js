import User from "../../models/User.js";

const deleteUser = async (req, res) => {
  try {
    // Check if the user is authenticated
    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    // Found user with prams id
    const { userId } = req.params;
    const foundUser = await User.findById(userId);

    if (!foundUser) return res.status(404).json({ message: "User not found" });

    // Check permissions
    if (user.id !== userId && !user.isAdmin)
      return res.status(403).json({ message: "You are not allowed to do it" });

    //Delete user
    await User.deleteOne({ _id: userId });
    res.status(202).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteUser;
