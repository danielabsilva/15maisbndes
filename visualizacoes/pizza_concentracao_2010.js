function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valores'],
  ['15 maiores', 49459448393],
  ['Outras 368', 36794740945]
]);

// Create and draw the visualization.
new google.visualization.PieChart(document.getElementById('pizza_concentracao_2010')).
    draw(data, {title:"Concentração de Investimentos do BNDES em 2010"});
}


google.setOnLoadCallback(drawVisualization);
