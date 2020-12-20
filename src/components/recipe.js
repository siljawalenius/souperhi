import React from "react";
import "./recipe.css"

class Recipe extends React.Component{
    render(){
        return(
            <div className = "recipe">
                <h1 className = "soupTitle">Lentil Soup</h1>
                <div className = "ingredients">
                    <li>3 cups water</li>
                </div>
                <ol className = "recipe-text">
                    <li> boil water </li>
                </ol>
            </div>
        )
    }
}

export default Recipe 