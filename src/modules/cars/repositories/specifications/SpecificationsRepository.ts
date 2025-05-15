import { PrismaClient } from "../../../../../generated/prisma";
import { ISpecificationRepository } from "./ISpecificationsRepository";

export class SpecificationsRepository extends PrismaClient implements ISpecificationRepository {



    constructor() {

        super()

    }

    create(description: string, name: string): void {
        throw new Error("Method not implemented.");
    }

}