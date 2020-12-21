import React from "react";
import './footer.css'

class Footer extends React.Component{
    openAll = () =>{
        console.log("button clicked")
        const path = "all"

        this.props.history.push(`/${path}`)
    }
    render(){
        return(
            <div className = "footer">
                <img className = "logo" src = '../illos/logo.png' alt = "logo"></img>
                
                <button 
                    className = "random"
                    onClick = {this.openAll}
                >Random Soup!</button>
            </div>
        )
    }
}

export default Footer 