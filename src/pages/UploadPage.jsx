import { NavigationBar } from "../components/Navigation-Bar";
import { UploadSection } from "../components/UploadSection";

export function UploadPage({recipes , setRecipes}){
    return(
         <>
            <NavigationBar></NavigationBar>
            <UploadSection recipes={recipes} ></UploadSection>
        </> 
    )
}

