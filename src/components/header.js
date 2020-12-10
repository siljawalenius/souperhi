import React from "react";
import './header.css'

class Header extends React.Component{
    render(){
        return(
            <div className = "header">
                <a href = '#'> all soups </a>
                <h1>SouperHi</h1>
                <a href = "#">about</a>
            </div>
        )
    }
}

export default Header 