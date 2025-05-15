import { ICategoryRepository } from "../repository/ICategoryRepository"

export class DeleteCategoryUseCase {

    constructor(private repository: ICategoryRepository) { }

    execute = async (id: string) => {
        const categoryId = await this.repository.listById(id)
        if (!categoryId) {
            throw new Error("Category not found")
        }

        await this.repository.delete(id)
    }
}