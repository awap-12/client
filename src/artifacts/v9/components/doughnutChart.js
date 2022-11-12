import React, {useEffect, useRef} from "react";
import { range, map, InternSet } from "d3-array";
import { schemeSpectral } from "d3-chord";
import { pie as Pie, arc as Arc } from "d3-shape";
import { scaleOrdinal } from "d3-scale";
import { quantize } from "d3-interpolate";
import { interpolateSpectral } from "d3-scale-chromatic";
import { select } from "d3-selection";

/**
 * Format color scale
 * @param keys
 * @param colors
 * @return {any}
 */
export function formatColors(keys, colors) {
    if (!!colors) return scaleOrdinal(keys, colors);
    colors = schemeSpectral[keys.size];
    colors = quantize(t => interpolateSpectral(t * 0.8 + 0.1), keys.size);
    return scaleOrdinal(keys, colors);
}

/**
 * Format a dough nut
 * @param keySet
 * @param valueSet
 * @param pad
 * @param inner
 * @param outer
 * @param label
 * @return {[]}
 */
export function formatDoughnut(keySet, valueSet, pad, { inner, outer }, label) {
    const definedSet = range(keySet.length).filter(i => !isNaN(valueSet[i]));

    const arcs = Pie()
        .padAngle(pad)
        .sort(null)
        .value(i => valueSet[i])(definedSet);

    const arc = Arc()
        .innerRadius(inner)
        .outerRadius(outer);

    const arcLabel = Arc()
        .innerRadius(label)
        .outerRadius(label);

    return [arc, arcs, arcLabel];
}

/**
 * A DoughnutChart
 * @param data data source
 * @param label
 * @param {number} width outer width, in pixels
 * @param {number} height outer height, in pixels
 * @param {number} innerRadius inner radius of pie, in pixels (non-zero for donut)
 * @param {number} outerRadius outer radius of pie, in pixels
 * @param {number} labelRadius
 * @param colors array of colors for names
 * @param {string} stroke stroke separating widths
 * @param {number} strokeWidth width of stroke separating wedges
 * @param {string} strokeLinejoin line join of stroke separating wedges
 * @param {number} padAngle angular separation between wedges
 * @param options
 * @return {JSX.Element}
 */
function DoughnutChart({
    data,
    label,
    width = 960,
    height = 600,
    innerRadius = Math.min(width, height) / 3,
    outerRadius = Math.min(width, height) / 2,
    labelRadius = (innerRadius + outerRadius) / 2,
    colors,
    stroke = innerRadius > 0 ? "none" : "white",
    strokeWidth = 1,
    strokeLinejoin = "round",
    padAngle = stroke === "none" ? 1 / outerRadius : 0,
    options
}) {
    const { key, value } = options;
    const svgRef = useRef(null);

    useEffect(() => {
        if (data && svgRef.current) {
            const svg = select(svgRef.current);
            const svgContent = svg.select(".content");
            const svgStructure = svg.select(".structure");

            const keySet = map(data, key), valueSet = map(data, value);
            const keys = new InternSet(keySet);

            const color = formatColors(keys, colors);
            const [arc, arcs, arcLabel] = formatDoughnut(
                keySet, valueSet, padAngle,
                { innerRadius, outerRadius },
                labelRadius
            )

            svg.attr("width", width).attr("height", height)
                .attr("viewBox", [-width / 2, -height / 2, width, height])
                .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

            svgStructure
                .attr("stroke", stroke)
                .attr("stroke-width", strokeWidth)
                .attr("stroke-linejoin", strokeLinejoin)
                .selectAll("path")
                .data(arcs)
                .join("path")
                .attr("fill", d => color(keySet[d.data]))
                .attr("d", arc)
                .append("title")
                .text(d => label(d.data));

            svgContent.selectAll("text")
                .data(arcs)
                .join("text")
                 .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
                .selectAll("tspan")
                .data(d => {
                    const lines = `${label(d.data)}`.split(/\n/);
                    return (d.endAngle - d.startAngle) > 0.25 ? lines : lines.slice(0, 1);
                })
                .join("tspan")
                 .attr("x", 0)
                 .attr("y", (v, i) => `${i * 1.1}em`)
                 .attr("font-weight", (v, i) => i ? null : "bold")
                 .text(d => d);
        }
    });

    return (
        <svg ref={svgRef}>
            <g className="structure" />
            <g className="content" fontSize={10} textAnchor="middle" />
        </svg>
    );
}

export default DoughnutChart;
