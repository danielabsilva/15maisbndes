function drawVisualization() {
// Create and populate the data table.
var data = google.visualization.arrayToDataTable([
  ['Empresa', 'Valor'],
  ['Petrobras', 24753538073],
  ['Caixa Econômica Federal', 4000000000],
  ['Suzano Papel e Celulose', 3148982780],
  ['Marfrig Alimentos', 2700000000],
  ['Petrobras Transpetro', 2549398855],
  ['Estaleiro Atlântico Sul', 1582846545],
  ['Arcelormittal Brasil', 1536505252],
  ['Cia Brasileira de Offshore', 1245228947],
  ['Município do Rio de Janeiro', 1201186541],
  ['Estado do Ceará', 1162326702],
  ['Mercedes-Benz do Brasil', 1157085797],
  ['Braskem S/A', 1125494100],
  ['Wilson Sons Offshore S/A', 1118785914],
  ['Estado da Bahia', 1091585400],
  ['Concessionária Rota das Bandeiras S/A', 1086483487],
  ['Outras 368', 36794740945]
  ]);

// Create and draw the visualization.
new google.visualization.BarChart(document.getElementById('barra_15mais_2010')).
    draw(data, {curveType: "function",
                width: 550, height: 440,
                vAxis: {maxValue: 10}}
        );
}


google.setOnLoadCallback(drawVisualization);
