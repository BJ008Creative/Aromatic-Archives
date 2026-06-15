export function UploadSection(){
    return(
        <div className="UploadSection">
            <h1>Upload Recipe</h1>

            <input placeholder="Recipe Name" />

            <br /><br />

            <input placeholder="Author" />

            <br /><br />

            <textarea placeholder="Recipe Description"></textarea>

            <br /><br />

            <button>Submit</button>
    
        </div>
    )
        
    
}