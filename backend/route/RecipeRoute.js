import express from "express";
import { createRecipe, getAllRecipe } from "../controller/RecipeController.js";


export const recipeRouter = express.Router();

recipeRouter.route("/recipe/new").post(createRecipe);
recipeRouter.route("/allRecipe").get(getAllRecipe);