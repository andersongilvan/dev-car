import { Request, Response } from "express";
import { ListCategoryByIdUseCase } from "../../useCases/ListCategoryByIdUseCase";

export class ListCategoryByIdController {

    constructor(private useCase: ListCategoryByIdUseCase) { }

    handle = async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            const result = await this.useCase.execute(id)
            response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message })
            }
            response.status(500).json({ error: "Server error" })
        }
    }
}