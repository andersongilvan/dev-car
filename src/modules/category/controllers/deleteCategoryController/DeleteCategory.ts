import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "../../useCases/DeleteCategoryUseCase";

export class DeleteCategoryByIdController {

    constructor(private usecase: DeleteCategoryUseCase) { }

    handle = async (request: Request, response: Response) => {
        const { id } = request.body
        try {
            this.usecase.execute(id)
            response.status(200).json({ message: "Deleted category" })
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message })
            }
            response.status(500).json({ error: "Server error" })
        }

    }
}