import './NavigationBar.css'
import { useState } from 'react'



export function NavigationBar(){
    const [count , setCount] = useState(0)
    function Click(){
        setCount(a=>a+1);
        
    }
    function Congrats(){
        if(count==100){
            return(
                <p>100 on the way</p>
            )
        }
        return

    }
    return(
        <div className="NavigationBar">
            <h1 className='Heading'>Aroma-Archives</h1>
           
            <div className='Buttons'>
                <button className="HomeButton">Home</button>
                <button onClick={Click} className='UploadButton'>Upload {count}</button>
                <Congrats></Congrats>
                <button className='ViewButton'>View Uploads</button>
            </div>
            
            
            
            
        </div>
    )
}