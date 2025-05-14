import { ListCategoryDto } from "../dto/ListCategoryDto";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class CreateCategoryUseCase {

    constructor(private repository: ICategoryRepository) { }

    execute = async (name: string, description: string) => {
        if (!name || !description) {
            throw new Error("Required fields")
        }
        
        const category = await this.repository.create({ name, description })
        const categoryDto = new ListCategoryDto(category)
        
        return categoryDto
    }
}