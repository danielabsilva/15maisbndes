function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valor (em milhões)'],
  ['Eletrobras Termonuclear S/A', 6146],
  ['Norte Energia S/A', 4773],
  ['Vivo S.A.', 3031],
  ['Financiadora de Estudos Projetos Finep', 3000],
  ['Eldorado Celulose e Papel Ltda', 2801],
  ['AMBEV', 1913],
  ['Logum Logistica S/A', 1757],
  ['Fiat Automóveis S/A', 1299],
  ['Global Village Telecom Ltda', 1184],
  ['Votorantim Cimentos S.A', 1139],
  ['Alberto Pasqualini - Refap S/A', 1127],
  ['Usiminas', 1088],
  ['Concessionária Auto Raposo Tavares S/A', 1052],
  ['Petróleo Brasileiro S/A - Petrobras', 1023],
  ['Ctrens - Companhia de Manutenção', 946],
  ['Outras 343', 33456]
  ]);

// Create and draw the visualization.
new google.visualization.BarChart(document.getElementById('barra_15mais_2011')).
    draw(data, {curveType: "function",
                width: 550, height: 440,
                vAxis: {maxValue: 10}
                }
        );
}


google.setOnLoadCallback(drawVisualization);
