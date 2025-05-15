
import { UpdateCategoryDto } from "../dto/UpdateCategoryDto";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class UpdateCategoryUseCase {
    constructor(private repository: ICategoryRepository) { }

    execute = async ( {id, name, description } : UpdateCategoryDto) => {

        // Verificar se o recurso está cadastrado no banco de dados

        const categoryExist = await this.repository.listById(id)

        if(!categoryExist) {
            throw new Error("Category not found")
        }

      const category = await this.repository.update({ id, name, description })
      
      return category
    }

}