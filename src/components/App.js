import React, { useState } from "react"
import RecipeList from "./RecipeList"
import "../css/app.css"

function App() {
  return <RecipeList recipes={sampleRecipes} />
}

const sampleRecipes = [
  {
    id: 1,
    name: "plain chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Salt on Chicken\n 2. Put chicken inside oven\n 3. Eat!",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbsp",
      },
    ],
  },
  {
    id: 2,
    name: "plain pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Paprika on Pork\n 2. Put Pork inside oven\n 3. Eat!",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbsp",
      },
    ],
  },
  {
    id: 3,
    name: "Birria Tacos",
    servings: 12,
    cookTime: "4:50",
    instructions: "1. Deseed Guajillo Chiles\n 2. Put chile in Pot\n 3. Eat!",
    ingredients: [
      {
        id: 1,
        name: "Chuck Roast",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Guajillo Chiles",
        amount: "10 Pods",
      },
    ],
  },
]
export default App
