import { PrismaClientValidationError } from "@prisma/client/runtime/library"
import { ICategoryRepository } from "../repository/ICategoryRepository"
import { error } from "console"

export class DeleteCategoryUseCase {

    constructor(private repository: ICategoryRepository) { }

    execute = async (id: string) => {
        try {
            const categoryDeleted = await this.repository.delete(id)
            console.log("User deleted")
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
            console.log("Erro inesperado")
        }
    }
}