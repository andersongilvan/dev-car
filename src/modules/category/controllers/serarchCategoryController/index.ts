import { CategoryRepository } from "../../repository/CategoryRepository";
import { SearchCategoryUseCase } from "../../useCases/SearchCategoryUseCase";
import { SearchCategoryController } from "./SearchCategoryController";

const repository = new CategoryRepository()

const useCase = new SearchCategoryUseCase(repository)

export const searchCategoryController = new SearchCategoryController(useCase)