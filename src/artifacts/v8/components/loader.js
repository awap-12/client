import React, { useEffect, useState } from "react";
import { ascending } from "d3-array"
import { csv } from "d3-fetch";
import { LineChart } from "shared";

//region TODO: Move to React context and replace with correct api
import co2 from "../fixtures/national-carbon-emissions.csv";

/**
 * When handling import could use Promise.all([import])
 * @example
 *
 * const dataGroup = await Promise.all([
 *     import("../balabala1"), import("../balabala2"), ......
 * ]).then([GlobalAnnual, ......] => { GlobalAnnual, ...... });
 *
 */
const handlePath = () => ({ co2 });
const handleData = data => data.sort((a, b) => ascending(a.year, b.year));

//endregion

function Loader() {
    const [chartData, setChartData] = useState(null);
    const [colorMap, setColorMap] = useState(null);

    useEffect(() => {
        let cache = [], jobs = [];
        void (async () => {
            // csv use fetch https://developer.mozilla.org/docs/Web/API/fetch
            Object.values(handlePath()).forEach(path => {
                jobs.push(csv(path, data => {
                    const [, ...keys] = Object.keys(data), result = [];
                    keys.forEach(key  => {
                        result.push({
                            type: key,
                            year: `${+data["Year"]}`,
                            value: +data[key] * 3.664
                        });
                    });
                    return result;
                }));
            });
            Promise.all(jobs).then(value => {
                cache = value.flat(2);
                console.log(cache);
                setColorMap(value[0][0].map((data, index) => ({
                    type: data["type"], color: makeColor(index, value[0][0].length)
                })).reduce((obj, item) => ({ ...obj, [item["type"]]: item["color"] }), {}));
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
            <h2>CO2 emissions by country</h2>
            <div className="description">
             <strong>Description:</strong><br />
             This chart shows the CO2 emissions of each country over time and the trend of CO2 emissions as a line graph. Before 2019, the world's carbon dioxide emissions showed an upward trend. Since 2019, the carbon dioxide emissions of most countries and regions have shown a downward trend, and the world's carbon dioxide emissions have also declined. 
            </div>
            
            
            <div className="data-source">
            <strong>Sources Link:</strong><br />
            https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D<br />
            https://essd.copernicus.org/articles/14/1917/2022/
            </div>
            <br />
          </div> 
          <LineChart data={chartData}
                       color={type => {
                           return `hsl(${colorMap[type]}, 100%, 50%)`;
                       }}
                       options={{
                           x: value => new Date(value["year"]),
                           y: value => value["value"],
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

function makeColor(colorNum, colors){
    if (colors < 1) colors = 1;
    // defaults to one color - avoid divide by zero
    return colorNum * (360 / colors) % 360;
}

export default Loader;
