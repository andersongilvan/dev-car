import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../../useCases/CreateCategoryUseCase";

export class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    handle = async (request: Request, response: Response) => {
        const { name, description } = request.body
        


        try {
            const result = await this.createCategoryUseCase.execute({name, description})
            response.status(200).json(result)
        } catch (error) {
            error instanceof Error ? response.status(400).json(error.message) : error
        }
    }
}