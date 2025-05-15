import { PrismaClient } from "../../../../generated/prisma";
import { ISearchRepository } from "./ISearchRepository";

export class SearchAllRepository extends PrismaClient implements ISearchRepository {
    searchAll<T>(params: string): T {
        throw new Error("Method not implemented.");
    }

}