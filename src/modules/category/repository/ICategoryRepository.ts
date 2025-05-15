import { Category } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../dto/CreateCategoryDto";
import { UpdateCategoryDto } from "../dto/UpdateCategoryDto";

export interface ICategoryRepository {
    create({ name, description }: CreateCategoryDto): Promise<Category>
    list(): Promise<Category[]>
    listById(id: string): Promise<Category | null>
    search(param : string) : Promise<Category[]>
    update({ id, name, description }: UpdateCategoryDto): Promise<Category | null>
    delete(id: string): Promise<Category>
}