import express from "express";
import deleteUser from "../controllers/user/deleteUser.js";
import findUser from "../controllers/user/findUser.js";
import updateUser from "../controllers/user/updateUser.js";
import verifyToken from "../middlewares/verifyToken.js";

const userRoute = express();

userRoute
  .route("/:userId")
  .get(verifyToken, findUser)
  .patch(verifyToken, updateUser)
  .delete(verifyToken, deleteUser);

export default userRoute;
