import { Request, Response } from "express";
import { SearchCategoryUseCase } from "../../useCases/SearchCategoryUseCase";

export class SearchCategoryController {

    constructor(private useCase: SearchCategoryUseCase) { }

    handle = async (request: Request, response: Response) => {

        const { params } = request.params

        console.log("params ",params)

        try {
            const result = await this.useCase.execute(params)
            response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message })
            }
            response.status(400).json({ error: error })
        }
    }
}