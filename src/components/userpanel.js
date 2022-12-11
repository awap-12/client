import React from "react";
import {NavLink} from "react-router-dom";
import "./userpanel.css"


export default function Dashboard () {

    
    
   
    return (
        <>
        <div className="container">
            <div className="info-box">
                <div className="username">
                    User Name
                </div>
                <button className="btn btn-primary delete-btn">delete account</button>
            </div>
            <div className="tab-box">
                <div id="charts" >
                    <NavLink to="/mychart" style={{textDecoration:'none'}}> MyChart</NavLink>
                </div>
                <div id="file" >
                <NavLink to="/step1" style={{textDecoration:'none'}}> Upload Files</NavLink>
                </div>
                <div id="data" >Convert Data</div>  
                <div id="form">
                <NavLink to="/step3" style={{textDecoration:'none'}}>Create Chart</NavLink>
                </div>
            </div>
        </div>

        </>
     )
    

}

