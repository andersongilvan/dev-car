import { Category, Prisma, PrismaClient } from "../../../../generated/prisma";
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
            where: { id: id }
        })

        return category
    }

    search = async (param: string): Promise<Category[]> => {
        const categorySearch = await this.category.findMany({
            where: {
                OR: [
                    {
                        name: { endsWith : param }
                    },
                    {
                        description: { contains: param }
                    }
                ]
            }
        })

        return categorySearch.sort()
    }


    update = async ({ id, name, description }: UpdateCategoryDto): Promise<Category | null> => {
        const category = await this.category.update({
            where: { id }, data: { name, description }
        })

        return category
    }

    delete = async (id: string): Promise<Category> => {

        try {
            return this.category.delete({ where : { id } })
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new Error("Category nor found")
            }
            throw error
        }
       
    }
}