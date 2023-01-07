import User from "../../models/User.js";
import bcrypt from "bcrypt";

const updateUser = async (req, res) => {
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
    // Update the user

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    await User.findByIdAndUpdate(userId, {
      name: req.body.name,
      password: hashPassword,
    });

    return res.json({ message: "Successfully updated user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateUser;
