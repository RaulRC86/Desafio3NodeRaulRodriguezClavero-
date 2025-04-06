import { Router } from "express";
import {
  agregarPostsController,
  obtenerPostsController,
  actualizarPostsController,
  eliminarPostsController,
} from "./controller/postsController.js";

export const allRoutes = Router();

allRoutes.post("/posts", agregarPostsController);
allRoutes.get("/posts", obtenerPostsController);
allRoutes.put("/posts/:id", actualizarPostsController);
allRoutes.delete("/posts/:id", eliminarPostsController);

 