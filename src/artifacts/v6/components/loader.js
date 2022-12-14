import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { ascending } from "d3-array"
import { csv } from "d3-fetch";
import { LineChart } from "shared";

//region TODO: Move to React context and replace with correct api
import co2composite from "../fixtures/co2composite.csv";

/**
 * When handling import could use Promise.all([import])
 * @example
 *
 * const dataGroup = await Promise.all([
 *     import("../balabala1"), import("../balabala2"), ......
 * ]).then([GlobalAnnual, ......] => { GlobalAnnual, ...... });
 *
 */
const handlePath = () => ({ co2composite });
const handleData = data => data.sort((a, b) => ascending(a.year, b.year));

//endregion

function Loader() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        let cache = [], jobs = [];
        void (async () => {
            // csv use fetch https://developer.mozilla.org/docs/Web/API/fetch
            Object.entries(handlePath()).forEach(([key, path]) => {
                jobs.push(csv(path, data => {
                    console.log(data)
                    return {
                        type: key,
                        year: +data["age_gas_calBP"],
                        ppm: +data["co2_ppm"],
                    }
                }));
            });
            Promise.all(jobs).then(value => {
                cache = value.reduce((pre, cur) => pre.concat(cur));
                console.log(cache);
                setChartData(handleData(cache));
            });
        })();
    }, []);

    return !!chartData ?
        (
            <>
            <div className="detail-container">
          <div className="detail-center">
           <div className="detail-content"> 
           <div className = "detail-box">
            <h2>Ice core 800k year composite study CO2 measurements</h2>
            <div className="description">
             <strong>Description:</strong><br />
             The project enabled the reconstruction of atmospheric CO2 concentrations over the past 800,000 years. The oldest part of the EDC CO2 record is revisited by using different methods and core parts, and different correlations between CO2 and Antarctic temperature are found in this oldest part of the record. This chart visualizes the revised 800KYr CO2 data from Antarctic ice cores. 
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
            https://www.ncei.noaa.gov/access/paleo-search/study/17975<br />
            https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt
            </div>
            <br />
          </div> 
          <LineChart data={chartData}
                       color={type => {
                           switch (type) {
                               case "co2composite":     return "#0000ff";
                               default:                 return "#000000";
                           }
                       }}
                       tip={type => {
                           switch (type) {
                               case "co2composite":     return "Antarctic Ice Cores Revised 800KYr CO2 Data";
                               default:                 throw new Error("Invalid data");
                           }
                       }}
                       options={{
                           x: value => value["year"],
                           y: value => value["ppm"],
                           type: value => value["type"],
                           xType: scaleLinear,
                           yType: scaleLinear,
                           axis: [
                               { orient: "left" },
                               { orient: "bottom" }
                           ]
                       }}>
            </LineChart>
          </div>
        
          </div>
      
          <div className="detail-left"></div>
          <div className="detail-right"></div>
         
       
        </div>
        </>
        
        ) : <h1>Loading...</h1>;
}

export default Loader;
