import React, { useEffect, useState } from "react";
import { ascending } from "d3-array"
import { csv } from "d3-fetch";
import DoughnutChart from "./doughnutChart";

//region TODO: Move to React context and replace with correct api
import co2 from "../fixtures/global-GHG-emissions-by-sector-based-on-WRI-2020.csv";

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
                        time: data["Time"].includes("-") ? data["Time"] : `${data["Time"]}-01-01`,
                        anomaly: +data["Anomaly (deg C)"],
                        lowerConfidenceLimit: +data["Lower confidence limit (2.5%)"],
                        upperConfidenceLimit: +data["Upper confidence limit (97.5%)"]
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
            <DoughnutChart data={chartData}
            
            >
            </DoughnutChart>
        ) : <h1>Loading...</h1>;
}

export default Loader;
