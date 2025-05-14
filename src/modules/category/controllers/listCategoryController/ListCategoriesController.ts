import { Request, Response } from "express";
import { ListCategoryUseCase } from "../../useCases/ListCategoriesUseCase";




export class ListCategoriesController {

    constructor(private useCase : ListCategoryUseCase) {}

    handle = async (request: Request, response: Response) => {
        try {
            const result = await this.useCase.execute()
            response.status(200).json(result)
        } catch (error) {
            
        }
    } 
}