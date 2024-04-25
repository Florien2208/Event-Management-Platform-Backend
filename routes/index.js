import express from "express";
import userRouter from "./userRoutes";
// import productRouter from "./product";

// import authRouter from "./auth";

const mainRouter = express.Router();
// mainRouter.use("/v1", productRouter);
mainRouter.use("/v1", userRouter);
// mainRouter.use("/v1", authRouter);

export default mainRouter;
