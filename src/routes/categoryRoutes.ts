import { Router } from "express";
import { createCategoryController } from "../modules/category/controllers/createCategoryController";
import { listCategoriesController } from "../modules/category/controllers/listCategoryController";
import { updateCategoryController } from "../modules/category/controllers/updateCategoryController";
import { listCategoryByIdController } from "../modules/category/controllers/listCategoryByIdController";
import { deleteCategoryController } from "../modules/category/controllers/deleteCategoryController";

export const categoryRoutes = Router()


categoryRoutes.post("/", createCategoryController.handle)
categoryRoutes.get("/", listCategoriesController.handle)
categoryRoutes.get("/:id", listCategoryByIdController.handle)
categoryRoutes.put("/:id", updateCategoryController.handle)
categoryRoutes.delete("/:id", deleteCategoryController.handle)
