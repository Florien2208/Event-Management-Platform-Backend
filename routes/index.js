import express from "express";
import userRouter from "./userRoutes";
import eventRouter from "./eventRoutes";
// import productRouter from "./product";

// import authRouter from "./auth";

const mainRouter = express.Router();
// mainRouter.use("/v1", productRouter);
mainRouter.use("/v1", userRouter);
mainRouter.use("/v1", eventRouter);

export default mainRouter;
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *          name:
 *             type: string
 *             example: "john doe"
 *          email:
 *             type: string
 *             example: "example@gmail.com"
 *          phone:
 *             type: number
 *             example: 123456789
 *          location:
 *             type: string
 *             example: "Kigali"
 *          password:
 *             type: string
 *             example: "******"
 *          role:
 *             type: string
 *             example: "user"
 *     Login:
 *       type: object
 *       properties:
 *          email:
 *             type: string
 *             example: "example@gmail.com"
 *          password:
 *             type: string
 *             example: "******"
 *     Event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "event name"
 *         description:
 *           example: "event description"
 *         location:
 *           type: string
 *           example: "location"
 *         photo:
 *           type: string
 *           example: "upload photo"
 */

/**
 * @swagger
 * /api/v1/signup:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User Management
 *     requestBody:
 *       description: User object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 access_token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *
 *       409:
 *         description: User already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: User already exists
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Internal server error
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - User Management
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 access_token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *             example:
 *               message: User logged in successfully
 *               access_token: jwt.token.here
 *               user:
 *                 email: user@example.com
 *                 password: 123
 *       401:
 *         description: Wrong password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Wrong password
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: User not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Internal server error
 */

/**
 * @swagger
 * /changePassword:
 *   post:
 *     summary: Change Password
 *     tags:
 *       - User Management
 *     description: Change the password of an authenticated user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: Current password of the user.
 *               newPassword:
 *                 type: string
 *                 description: New password to set for the user.
 *             required:
 *               - currentPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       400:
 *         description: Bad Request - Invalid data
 */

/**
 * @swagger
 * /api/v1/getAllUsers:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User Management
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       409:
 *         description: Unauthorized, token is missing or invalid
 *       403:
 *         description: Forbidden, the user does not have permission
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/getuserbyId/{id}:
 *   get:
 *     summary: Get user by field value
 *     tags: [User Management]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The field to search by (e.g., email or id)
 *
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/deleteUserById/{id}:
 *   delete:
 *     summary: Delete user by Id
 *     tags: [User Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id of the user to delete
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       409:
 *         description: Internal server error
 */
