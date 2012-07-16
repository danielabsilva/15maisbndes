function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valor (em milhões)'],
  ['Petrobras', 24753],
  ['Caixa Econômica Federal', 4000],
  ['Suzano Papel e Celulose', 3148],
  ['Marfrig Alimentos', 2700],
  ['Petrobras Transpetro', 2549],
  ['Estaleiro Atlântico Sul', 1582],
  ['Arcelormittal Brasil', 1536],
  ['Cia Brasileira de Offshore', 1245],
  ['Município do Rio de Janeiro', 1201],
  ['Estado do Ceará', 1162],
  ['Mercedes-Benz do Brasil', 1157],
  ['Braskem S/A', 1125],
  ['Wilson Sons Offshore S/A', 1118],
  ['Estado da Bahia', 1091],
  ['Concessionária Rota das Bandeiras S/A', 1086],
  ['Outras 368', 36794]
  ]);

// Create and draw the visualization.
new google.visualization.BarChart(document.getElementById('barra_15mais_2010')).
    draw(data, {curveType: "function",
                width: 550, height: 440,
                vAxis: {maxValue: 10}}
        );
}


google.setOnLoadCallback(drawVisualization);
