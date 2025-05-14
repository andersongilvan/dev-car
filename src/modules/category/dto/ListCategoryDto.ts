import { Category } from "../../../../generated/prisma"

export class ListCategoryDto {
    id: string
    name: string
    description: string
    createdAt: Date

    constructor({ id, name, description, createdAt }: Category) {
        this.id = id
        this.name = name
        this.description = description
        this.createdAt = createdAt
    }
}