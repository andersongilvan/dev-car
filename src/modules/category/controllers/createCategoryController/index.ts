import { CategoryRepository } from "../../repository/CategoryRepository";
import { CreateCategoryUseCase } from "../../useCases/CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const repository = new CategoryRepository()

const createCategoryUseCase = new CreateCategoryUseCase(repository)

export const createCategoryController = new CreateCategoryController(createCategoryUseCase)