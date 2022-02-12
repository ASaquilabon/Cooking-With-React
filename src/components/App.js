import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbsp",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };
  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };
  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "plain chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Salt on Chicken\n2. Put chicken inside oven\n3. Eat!",
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
    instructions: "1. Paprika on Pork\n2. Put Pork inside oven\n3. Eat!",
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
    instructions: "1. Deseed Guajillo Chiles\n2. Put chile in Pot\n3. Eat!",
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
];
export default App;
