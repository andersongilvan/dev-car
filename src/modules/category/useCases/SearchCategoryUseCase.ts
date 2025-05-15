import { ListCategoryDto } from "../dto/ListCategoryDto";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class SearchCategoryUseCase {

    constructor(private repository: ICategoryRepository) { }

    execute = async (param: string): Promise<ListCategoryDto[]> => {
        const searchCategories = await this.repository.search(param)
        if (!searchCategories) {
            throw new Error("Category not found")
        }

        return searchCategories.map((category) => new ListCategoryDto(category))
    }
}