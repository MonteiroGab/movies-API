import { Router } from "express";
import movieSearchController from "../controllers/moviesController";

const moviesRouter = Router()

moviesRouter.get("", movieSearchController)


export default moviesRouter