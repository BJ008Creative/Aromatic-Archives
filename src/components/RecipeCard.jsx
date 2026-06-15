import "./RecipeCard.css";

export function RecipeCard({recipes} ) {
    console.log(recipes);
  return (
    <div className="RecipeCard">

      {recipes.map((item, index) => (
        <div key={index}>
          <h3>{item.recipe}</h3>
          <p>By {item.name}</p>
        </div>
      ))}

    </div>
  );
}