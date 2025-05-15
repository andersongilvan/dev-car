import { CategoryRepository } from "../../repository/CategoryRepository";
import { DeleteCategoryUseCase } from "../../useCases/DeleteCategoryUseCase";
import { DeleteCategoryByIdController } from "./DeleteCategory";

const repository = new CategoryRepository()

const useCase = new DeleteCategoryUseCase(repository)

export const deleteCategoryController = new DeleteCategoryByIdController(useCase)