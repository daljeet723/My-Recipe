import { Recipe } from "../model/RecipeModel.js";

//possible api:
// Create Recipe
// Get All Recipe
// Get Recipe Detail
// Update Recipe
// Delete Recipe
// Create Recipe Review
// Get Recipe Review
// Delete Review


//CREATE RECIPE 
export const createRecipe = async (req, res) => {
    try {
        const { name, description, ingredients, category } = req.body;
        const recipe = await Recipe.create({
            name, description, ingredients, category
        });

        res.status(201).json({
            success: true,
            message: "Recipe details uploaded successfully",
            recipe

        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
    // req.body.user = req.body.id;
}

//GET ALL RECIPE 
export const getAllRecipe = async (req, res) => {
    try {
        // const resultPerPage = 12;
        // const recipeCount = await Recipe.countDocuments();
        const allRecipe = await Recipe.find();
        res.status(201).json({
            success: true,
            allRecipe
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}