import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter Recipe Description"]
    },
    ingredients:{
        type:String,
        required:[true,"Please Enter Recipe ingredients"],
    },
    ratings:{
        type:String,
        default:0
    },
    image:[ // willbe array of object because of multiple images
        {   //when host in cloud will get public id and url
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Recipe  Category"]
    },
    time:{
        type:String,
        default:0
    },
    
})

export const Recipe = mongoose.model("Recipe", recipeSchema);
//now import in Controller