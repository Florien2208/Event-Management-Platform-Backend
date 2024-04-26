import express from "express";
import { addEvent } from "../controller/event/creatEvent";
import { getAllEvents } from "../controller/event/getAllEvent";
import { deleteEvent } from "../controller/event/deleteEvent";
import { GetEventbyId } from "../controller/event/getEventById";
import { updateEvent } from "../controller/event/updateEvent";
const eventRouter = express.Router();
eventRouter.post("/newEvent", addEvent);
eventRouter.get("/allEvent", getAllEvents);
eventRouter.delete("/deleteEvent/:id",deleteEvent);
eventRouter.get("getEvent/:id",GetEventbyId);
eventRouter.put("updateEvent", updateEvent)

export default eventRouter;
