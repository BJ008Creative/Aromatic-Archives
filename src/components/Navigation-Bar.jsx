import './NavigationBar.css'

import { Link } from "react-router-dom";



export function NavigationBar(){
   

    
    return(
        <div className="NavigationBar">
            <h1 className='Heading'>Aroma-Archives</h1>
           
            <div className='Buttons'>
                <Link to="/"><button className="HomeButton">Home</button></Link>
                <Link to="/upload"><button  className='UploadButton'>Upload</button></Link>
               
                <button className='ViewButton'>View Uploads</button>
            </div>
            
            
            
            
        </div>
    )
}