
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
                <p key={index}>The recipe is {item.recipe} by {item.name}</p>
            ))}
        </div>
    )
}