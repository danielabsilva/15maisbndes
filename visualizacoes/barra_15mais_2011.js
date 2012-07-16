function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valor'],
  ['Eletrobras Termonuclear S/A', 6146256000],
  ['Norte Energia S/A', 4773126308],
  ['Vivo S.A.', 3031110000],
  ['Financiadora de Estudos Projetos Finep', 3000000000],
  ['Eldorado Celulose e Papel Ltda', 2801096760],
  ['AMBEV', 1913370000],
  ['Logum Logistica S/A', 1757600000],
  ['Fiat Automóveis S/A', 1299536999],
  ['Global Village Telecom Ltda', 1184107000],
  ['Votorantim Cimentos S.A', 1139473972],
  ['Alberto Pasqualini - Refap S/A', 1127349480],
  ['Usiminas', 1088466102],
  ['Concessionária Auto Raposo Tavares S/A', 1052260682],
  ['Petróleo Brasileiro S/A - Petrobras', 1023233229],
  ['Ctrens - Companhia de Manutenção', 946890000],
  ['Outras 343', 33456792682]
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
