import { useState } from "react";
import { NavigationBar } from "../components/Navigation-Bar.jsx";

export function UploadPage({ recipes, setRecipes }) {
  const [recipeName, setRecipeName] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit() {
    const newRecipe = {
      recipe: recipeName,
      name: author,
    };

    setRecipes([...recipes, newRecipe]);

    console.log("Recipe Added");
  }

  return (
    <>
        <NavigationBar></NavigationBar>
    <div>
      <h1>Upload Recipe</h1>

      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
    </>
    
  );
}