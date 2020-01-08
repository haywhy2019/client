import React, { Component } from 'react';
import Style from "./Style.module.css"


 class Home extends Component {
    render() {
        return (

<div>

             
           <div className={Style.heroimage}>
            <div className={Style.herotext}>
                <h1> Welcome to the LUNDAPP</h1>
                <p>Getting your lundary done has never been easier</p>
                <button>Get Started</button>
            </div>
            </div>

     </div> 
        
     
        )
    }
}

export default Home
