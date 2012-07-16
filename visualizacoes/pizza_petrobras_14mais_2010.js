function drawVisualization() {
    // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
      ['Empresa', 'Valor'],
      ['Petrobras', 24753],
      ['14 mais do BNDES', 24705],
      ['Outras 368', 36794]
    ]);
  
    // Create and draw the visualization.
    new google.visualization.PieChart(document.getElementById('pizza_petrobras_14mais_2010')).
        draw(data, {title:"15 maiores investimentos do BNDES em 2010 (em milhões)"});
  }
  google.setOnLoadCallback(drawVisualization);
