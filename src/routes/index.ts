import express, { Express } from "express";
import { categoryRoutes } from "./categoryRoutes";


export function routes(app : Express) {
    app.use(express.json())
    app.use("/categories", categoryRoutes)
}