import { Router } from "express";
import { searchCategoryController } from "../modules/category/controllers/serarchCategoryController";

export const searchRoute = Router()

searchRoute.get("/:params", searchCategoryController.handle)

