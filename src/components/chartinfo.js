import React from "react";
import './detail.css';


export default function ChartInfo() {
    return (
        <>
       <div className = "detail-box">
            <h2>Title</h2>
            <div className="user-name">
              Username:name
            </div>
        
            <div className="description">
             <strong>Description:</strong><br />
             
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
             
            </div>
            <br />
            <button type="button" class="btn btn-outline-primary">delete</button>
          </div> 
        </>
    )
    
}