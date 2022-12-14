import React from "react";
import Loader from "./components/loader";

function V9() {
    return(
        <>
            <div className="detail-container">
          <div className="detail-center">
           <div className="detail-content"> 
           <div className = "detail-box">
            <h2>CO2 emissions by sectors</h2>
            <div className="description">
             <strong>Description:</strong><br />
             The chart shows the percentage of CO2 emitted by different pie charts. As can be seen from the chart, Energy is the sector that emits the largest carbon dioxide, and waste is the sector that emits the least carbon dioxide. In addition, the energy sector accounts for more than 50% of carbon dioxide emissions, and the three industries to which energy belongs are also the three industries that emit the most carbon dioxide. 
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
            https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector<br />
            https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx
            </div>
            <br />
          </div> 
          <Loader />
          </div>
        
          </div>
      
          <div className="detail-left"></div>
          <div className="detail-right"></div>
         
       
        </div>
        </>
       
    );
}

export default V9;
