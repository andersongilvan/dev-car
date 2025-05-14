import { Router } from "express";
import { createCategoryController } from "../modules/category/controllers/createCategoryController";
import { listCategoriesController } from "../modules/category/controllers/listCategoryController";

export const categoryRoutes = Router()


categoryRoutes.post("/", createCategoryController.handle)
categoryRoutes.get("/", listCategoriesController.handle)
