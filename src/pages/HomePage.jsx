import { NavigationBar } from "../components/Navigation-Bar"
import './HomePage.css'
import { RecipeCard } from "../components/RecipeCard"
export function HomePage(){
    return(
        <>
             <NavigationBar ></NavigationBar>
            <RecipeCard ></RecipeCard>
        </>
      
       
    )
}