import { CategoryRepository } from "../../repository/CategoryRepository";
import { ListCategoryUseCase } from "../../useCases/ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";

const repository = new CategoryRepository()

const createCategoryUseCase = new ListCategoryUseCase(repository)

export const listCategoriesController = new ListCategoriesController(createCategoryUseCase)