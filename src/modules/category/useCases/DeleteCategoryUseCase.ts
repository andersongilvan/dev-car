import { ICategoryRepository } from "../repository/ICategoryRepository"

export class DeleteCategoryUseCase {

    constructor(private repository: ICategoryRepository) { }

    execute = async (id: string) => {
        try {
            await this.repository.delete(id)
            console.log("User deleted")
        } catch (error) {
            console.log("Error ", error)
        }
    }
}