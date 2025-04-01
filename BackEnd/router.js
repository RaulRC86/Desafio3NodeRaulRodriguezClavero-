import { Router } from "express";
import {
  agregarPostsController,
  obtenerPostsController,
} from "./controller/postsController.js";

export const allRoutes = Router();

allRoutes.post("/posts", agregarPostsController);
allRoutes.get("/posts", obtenerPostsController);

 