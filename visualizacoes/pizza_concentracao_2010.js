function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valores (em milhões)'],
  ['15 maiores', 49459],
  ['Outras 368', 36794]
]);

// Create and draw the visualization.
new google.visualization.PieChart(document.getElementById('pizza_concentracao_2010')).
    draw(data, {title:"Concentração de Investimentos do BNDES em 2010 (em milhões)"});
}


google.setOnLoadCallback(drawVisualization);
