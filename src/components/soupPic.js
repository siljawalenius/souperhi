import React from "react";
import "../index.css"

class SoupPic extends React.Component{
    render(){
        return(
            <div className = "pic">
                <img src = {require("../illos/logo.svg")} alt = "logo" />
            </div>
        )
    }
}

export default SoupPic 