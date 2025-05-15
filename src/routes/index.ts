import express, { Express } from "express";
import { categoryRoutes } from "./categoryRoutes";
import { searchRoute } from "./searchRoutes";


export function routes(app : Express) {
    app.use(express.json())
    app.use("/categories", categoryRoutes)
    app.use("/categories/search", searchRoute)
}