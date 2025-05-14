import { Category, PrismaClient } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../dto/CreateCategoryDto";
import { ListCategoryDto } from "../dto/ListCategoryDto";
import { ICategoryRepository } from "./ICategoryRepository";

export class CategoryRepository extends PrismaClient implements ICategoryRepository {
    constructor() {
        super()
    }
    create = async ({ name, description }: CreateCategoryDto) => {
        const category = await this.category.create({
            data: { name: name, description: description }
        })

        return category
    }
    list = async () => {
        const categories = await this.category.findMany()
        return categories
    }
    listById = async (id: string) :  Promise<Category | null> => {
        const category = await this.category.findFirst({
            where : { id : id }
        })

        return category
    }
    update({ name, description }: CreateCategoryDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
}