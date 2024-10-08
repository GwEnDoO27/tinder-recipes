'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useCallback, useState } from "react";
import { CardContent } from "./_Comps/Card";
import { SelectTypeCuisine, SelectTypeFood } from "./_Comps/Select";
import { Title } from "./_Comps/Title";

interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  sourceUrl: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const getRandomRecipes = useCallback(async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const tags = [selectedMealType, selectedCuisine].filter(Boolean).join(' ');

      const resp = await axios.get(`https://api.spoonacular.com/recipes/random`, {
        params: {
          apiKey,
          tags,
          number: 5,
          limitLicense: true
        },
        paramsSerializer: params => {
          return Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');
        }
      });
      console.log("resp", resp)
      setRecipes(resp.data.recipes);
    } catch (error) {
      console.error("Erreur lors de la récupération des recettes :", error);
    }
  }, [selectedMealType, selectedCuisine]);

  const handleMealTypeChange = (value: string) => {
    setSelectedMealType(value);
  };

  const handleCuisineChange = (value: string) => {
    setSelectedCuisine(value);
  };

  <Button onClick={getRandomRecipes}>Rechercher des recettes</Button>

  return (
    <main className="flex h-screen w-full flex-col items-center font-mono bg-gradient-to-bl from-pink-300 to-yellow-400">
      <h1 className="flex h-auto text-white text-5xl font-extrabold drop-shadow-glow p-16 font-mono">Tinder Recipes</h1>
      {/* <Title /> */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <SelectTypeFood onValueChange={handleMealTypeChange} />
        <SelectTypeCuisine onValueChange={handleCuisineChange} />
        <Button onClick={getRandomRecipes}>Rechercher des recettes</Button>
      </div>

      <div className="flex w-full h-full justify-between">
        {recipes.length > 0 && (
          <CardContent
            recipes={recipes.map(recipe => ({
              id: recipe.id,
              title: recipe.title,
              readyInMinutes: recipe.readyInMinutes,
              sourceUrl: recipe.sourceUrl,
              image: recipe.image,
              link: `/recipe/${recipe.id}`,
            }))}

          />
        )}
      </div>
    </main>
  );
}

