import { ListCategoryDto } from "../dto/ListCategoryDto";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class ListCategoryUseCase {

    constructor(private repository : ICategoryRepository) {}
    
    execute = async () => {
        
    const categories = await this.repository.list()
    
      return categories.map((categories => new ListCategoryDto(categories)))
    }
}