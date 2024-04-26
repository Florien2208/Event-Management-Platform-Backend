import express from "express";
import { Signup } from "../controller/user/signup";
import { Login } from "../Authorization/login";
import { getAllUsers } from "../controller/user/getAllUsers";
import { updateUser } from "../controller/user/updateUser";
import { deleteUser } from "../controller/user/deleteUser";
import { GetuserbyId } from "../controller/user/getuser";
import {verifyToken} from "../middleware/verifyToken"

const userRouter = express.Router();
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.get("/getuserbyId/:id", GetuserbyId);
userRouter.delete("/deleteUserById/:id", deleteUser);
userRouter.put("/updateUser/:id", updateUser);
export default userRouter;

/**
 * @swagger
 * /app/v1/newEvent:
 *   post:
 *     summary: Add new Product
 *     tags:
 *       - Event
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Product object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Event registered successfully
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
 *                   $ref: '#/components/schemas/Event'

 */

/**
 * @swagger
 * /app/v1/allEvent:
 *   get:
 *     summary: To get all the product in database
 *     tags:
 *       - Event
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: This is an API used to get all event
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */

/**
 * @swagger
 * /app/v1/getEvent/{id}:
 *   get:
 *     summary: To get the event in database by id
 *     tags:
 *       - Event
 *     security:
 *       - BearerAuth: []
 *     description: This is used to get event by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     responses:
 *       200:
 *         description: This is an API used to test
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */

/**
 * @swagger
 * /app/v1/updateEvent/{id}:
 *   put:
 *     summary: To update the event in database by id
 *     tags:
 *       - Event
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                description:
 *                  type: string
 *                location:
 *                  type: number
 *                photo:
 *                  type: string
 *                  description: Backdrop image for the tour (Required)
 *
 *
 *
 *     responses:
 *       200:
 *         description: This is an API used to test
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */

/**
 * @swagger
 * /api/v1/deleteEvent/{id}:
 *   delete:
 *     summary: To delete the Event in database by id
 *     tags:
 *       - Event
 *     security:
 *       - BearerAuth: []
 *     description: This is used to delete Event by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     responses:
 *       200:
 *         description: This is an API used to test
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
