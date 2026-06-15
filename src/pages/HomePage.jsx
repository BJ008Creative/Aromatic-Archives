import { NavigationBar } from "../components/Navigation-Bar"
import './HomePage.css'
import { RecipeCard } from "../components/RecipeCard"
import { AboutUs } from "../components/AboutUs"
export function HomePage(){
    return(
        <>
            <NavigationBar ></NavigationBar>
            <AboutUs></AboutUs>
            <RecipeCard></RecipeCard>
        </>
      
       
    )
}