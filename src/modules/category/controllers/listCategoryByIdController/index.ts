import { CategoryRepository } from "../../repository/CategoryRepository";
import { ListCategoryByIdUseCase } from "../../useCases/ListCategoryByIdUseCase";
import { ListCategoryByIdController } from "./ListCategoryByIdController";

const repository = new CategoryRepository()

const useCase = new ListCategoryByIdUseCase(repository)

export const listCategoryByIdController = new ListCategoryByIdController(useCase)