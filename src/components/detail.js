import React from "react";
import ChartInfo from "./chartinfo";
import V7 from "v7";
import './detail.css';

export default function Detail() {
    return (
        <>
        <div className="detail-container">
          <div className="detail-center">
           <div className="detail-content"> 
          <ChartInfo />
          <V7 />
          </div>
        
          </div>
      
          <div className="detail-left"></div>
          <div className="detail-right"></div>
         
       
        </div>
        </>
    )
    
}