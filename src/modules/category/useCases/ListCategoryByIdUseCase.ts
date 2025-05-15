import { ListCategoryDto } from "../dto/ListCategoryDto";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class ListCategoryByIdUseCase {

    constructor(private repository : ICategoryRepository) {}

    execute = async ( id : string ) => {
        const category = await this.repository.listById(id)
        if(!category) {
            throw new Error("Category not found")
        }
        return new ListCategoryDto(category)
    }
}