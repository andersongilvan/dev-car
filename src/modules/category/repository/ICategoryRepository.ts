import { Category } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../dto/CreateCategoryDto";

export interface ICategoryRepository {
    create({ name, description }: CreateCategoryDto): Promise<Category>
    list(): Promise<Category[]>
    listById(id: string): Promise<Category | null>
    update({ name, description }: CreateCategoryDto): Promise<void>
    delete(id: string): void
}