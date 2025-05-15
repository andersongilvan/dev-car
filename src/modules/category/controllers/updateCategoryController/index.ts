import { CategoryRepository } from "../../repository/CategoryRepository"
import { UpdateCategoryUseCase } from "../../useCases/UpdateCategoryUseCase"
import { UpdateCategoryController } from "./UpdateController"


const repository = new CategoryRepository()

const useCase = new UpdateCategoryUseCase(repository)

export const updateCategoryController = new UpdateCategoryController(useCase)