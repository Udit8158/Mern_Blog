import User from "../../models/User.js";

const findUser = async (req, res) => {
  try {
    // Check if the user is authenticated
    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    // Found user with prams id
    const { userId } = req.params;
    const foundUser = await User.findById(userId);

    if (!foundUser) return res.status(404).json({ message: "User not found" });

    // Return the founded user with all information
    return res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default findUser;
