function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Year', 'Inclusão Social', 'Industrial', 'Infraestrutura', 'Insumos Básicos', 'Meio Ambiente'],
  ['2010', 15244, 15888, 11264, 43856, 0],
  ['2011', 5163, 18333, 27826, 14342, 74]
]);

// Create and draw the visualization.
new google.visualization.ColumnChart(document.getElementById('barra_areas_20102011')).
    draw(data,
         {title:"Investimentos do BNDES por Área - 2010 e 2011",
          width:600, height:400,
          hAxis: {title: "Ano"}}
    );
}


google.setOnLoadCallback(drawVisualization);
