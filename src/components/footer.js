import React from "react";
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                <img className = "logo" src = '../logo.png' alt = "logo"></img>
                
                <button className = "random">Random Soup!</button>
            </div>
        )
    }
}

export default Footer 