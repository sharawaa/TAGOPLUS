const dataset = [75, 25];
const colors = ["#3498db", "#EBE8E8"];
const labels = [""];

const width = 183;
const height = 183;

const svg = d3
  .select("#doughnutChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const radius = Math.min(width, height) / 2;

const pie = d3.pie().value((d) => d);

const arc = d3
  .arc()
  .innerRadius(radius * 0.8)
  .outerRadius(radius);

const arcs = pie(dataset);

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);

g.selectAll("path")
  .data(arcs)
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", (d, i) => colors[i]);

// Adding labels
const labelGroup = g
  .selectAll(".label")
  .data(arcs)
  .enter()
  .append("g")
  .attr("class", "label");

labelGroup
  .append("text")
  .attr("transform", (d) => `translate(${arc.centroid(d)})`)
  .attr("dy", ".35em")
  .style("text-anchor", "middle")
  .text((d, i) => labels[i]);
