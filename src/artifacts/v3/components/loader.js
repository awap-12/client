import React, { useEffect, useState } from "react";
import { ascending } from "d3-array"
import { csv } from "d3-fetch";
import { LineChart } from "shared";

//region TODO: Move to React context and replace with correct api
import Co2Annual from "../fixtures/co2-annual.csv";
import Co2Monthly from "../fixtures/co2-monthly.csv";

/**
 * When handling import could use Promise.all([import])
 * @example
 *
 * const dataGroup = await Promise.all([
 *     import("../balabala1"), import("../balabala2"), ......
 * ]).then([GlobalAnnual, ......] => { GlobalAnnual, ...... });
 *
 */
const handlePath = () => ({ Co2Annual, Co2Monthly });
const handleData = data => data.sort((a, b) => ascending(a.time, b.time));

//endregion

function Loader() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        let cache = [], jobs = [];
        void (async () => {
            // csv use fetch https://developer.mozilla.org/docs/Web/API/fetch
            Object.entries(handlePath()).forEach(([key, path]) => {
                jobs.push(csv(path, data => {
                    return {
                        type: key,
                        // monthly contain yyyy-mm, yearly pickup middle yyyy-06
                        time: "month" in data ? `${data["year"]}-${["0", "0", ...data["month"]].slice(-2).join('')}` : `${data["year"]}-01-01`,
                        ppm: "average" in data ? +data["average"] : +data["mean"],
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
            <h2>Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958</h2>
            <div className="description">
             <strong>Description:</strong><br />
             The graph shows carbon dioxide measurements from observatories near the summit of Mauna Loa at an altitude of 3,400 meters. The data selection process aimed to filter out any effects of nearby CO2 emissions or removals. Due to its superior geographical location and strict data selection criteria, the carbon dioxide measurements made by the Mauna Loa Observatory reflect the real situation of the global atmosphere. It can be seen from the data visualization chart that the trends of annual data and monthly data are consistent. 
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
            https://gml.noaa.gov/ccgg/trends/<br />
            https://gml.noaa.gov/ccgg/about/co2_measurements.html
            </div>
            <br />
          </div> 
          <LineChart data={chartData}
                       color={type => {
                           switch (type) {
                               case "Co2Annual":         return "#00ff00";
                               case "Co2Monthly":        return "#008800";
                               default:                  return "#000000";
                           }
                       }}
                       tip={type => {
                           switch (type) {
                               case "Co2Annual":        return "Global Annual";
                               case "Co2Monthly":       return "Global Monthly";
                               default:                 throw new Error("Invalid data");
                           }
                       }}
                       options={{
                           x: value => new Date(value["time"]),
                           y: value => value["ppm"],
                           type: value => value["type"],
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
