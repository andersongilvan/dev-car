import { Category, PrismaClient } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../dto/CreateCategoryDto";
import { ListCategoryDto } from "../dto/ListCategoryDto";
import { UpdateCategoryDto } from "../dto/UpdateCategoryDto";
import { ICategoryRepository } from "./ICategoryRepository";

export class CategoryRepository extends PrismaClient implements ICategoryRepository {
    constructor() {
        super()
    }


    create = async ({ name, description }: CreateCategoryDto) => {
        const category = await this.category.create({
            data: { name, description }
        })

        return category
    }
    list = async () => {
        const categories = await this.category.findMany()
        return categories
    }


    listById = async (id: string): Promise<Category | null> => {
        const category = await this.category.findFirst({
            where: { id : id }
        })

        return category
    }


    update = async ({ id, name, description }: UpdateCategoryDto): Promise<Category | null> => {
        const category = await this.category.update({
            where: { id }, data: { name, description }
        })

        return category
    }

    delete = async (id: string): Promise<void> => {
        await this.category.delete({
            where : { id }
        })
    }
}