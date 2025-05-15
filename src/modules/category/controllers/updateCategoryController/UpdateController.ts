import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "../../useCases/UpdateCategoryUseCase";

export class UpdateCategoryController {

    constructor(private usecase: UpdateCategoryUseCase) { }

    handle = async (request: Request, response: Response) => {
        const { id } = request.params
        const { name, description } = request.body
        try {
            await this.usecase.execute({ id, name, description })
            response.status(200).json({ message: "Updated category" })
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message })
            }
            response.status(500).json({ error: "Server error" })
        }
    }
}