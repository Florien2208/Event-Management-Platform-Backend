import express from "express";
import { Signup } from "../controller/user/signup";
import { Login } from "../Authorization/login";
import { getAllUsers } from "../controller/user/getAllUsers";
import { updateUser } from "../controller/user/updateUser";
import { deleteUser } from "../controller/user/deleteUser";
import { GetuserbyId } from "../controller/user/getuser";

// import { GetuserbyId } from "../controller/User/getUser";
// import { deleteUser } from "../controller/User/deleteUser";
// import { getAllUsers } from "../controller/User/getAllUsers";
// import { updateUser } from "../controller/User/updateUser";

// const { Login } = require("../controller/Authentication/login");
const userRouter = express.Router();
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.get("/getuserbyId/:id", GetuserbyId);
userRouter.delete("/deleteUserById/:id", deleteUser);
userRouter.put("/updateUser/:id", updateUser);
export default userRouter;
