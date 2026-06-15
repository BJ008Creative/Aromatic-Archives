import './RecipeCard.css'
export function RecipeCard(){

    const recipeCard=[{
        name:"Baishali",
        recipe:"potato",
        
        
    },{
        name:"ariyan",
        recipe:"egg",
    }]
    return(

        
        <div className="RecipeCard">
            
             {recipeCard.map((item,index) => (
                <div key={index}>The recipe is {item.recipe} by {item.name}</div>
            ))}
        </div>
    )
}