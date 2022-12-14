import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { ascending } from "d3-array"
import { csv } from "d3-fetch";
import { LineChart } from "shared";

//region TODO: Move to React context and replace with correct api
import vostok from "../fixtures/vostok.csv";

/**
 * When handling import could use Promise.all([import])
 * @example
 *
 * const dataGroup = await Promise.all([
 *     import("../balabala1"), import("../balabala2"), ......
 * ]).then([GlobalAnnual, ......] => { GlobalAnnual, ...... });
 *
 */
const handlePath = () => ({ vostok });
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
                    return {
                        type: key,
                        // monthly contain yyyy-mm, yearly pickup middle yyyy-06
                        year: +data["Mean"],
                        ppm: +data["ppmv"],
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
            <h2>Vostok Ice Core CO2 measurements, 417160 - 2342 years</h2>
            <div className="description">
             <strong>Description:</strong><br />
             The Vostok station has the deepest ice core in history, and due to the characteristics of the ice core itself, the trapped air inclusions can directly record the changes of trace gas composition in the past. For example, the Vostok ice core records across four climate cycles, and the air extracted from the ice is younger than the surrounding ice. The extension of the Vostok CO2 record shows similar major trends in CO2 over each glacial cycle and a correlation between Antarctic temperature and atmospheric CO2 concentration. The data in the data visualization charts also exhibit the same trend. 
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
            https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html <br />
            https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2
            </div>
            <br />
          </div> 
          <LineChart data={chartData}
                       color={type => {
                           switch (type) {
                               case "vostok":           return "#0000ff";
                               default:                 return "#000000";
                           }
                       }}
                       tip={type => {
                           switch (type) {
                               case "vostok":           return "Historical CO2 Record from the Vostok Ice Core";
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
