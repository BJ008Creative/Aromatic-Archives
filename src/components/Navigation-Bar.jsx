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
            <h1>Aroma-Archives</h1>
            <p>An archive full of mouth watering dishes.</p>
            <button>Home</button>
            <button onClick={Click}>Upload {count}</button>
            <Congrats></Congrats>
            <button>View Uploads</button>
            
            
            
        </div>
    )
}