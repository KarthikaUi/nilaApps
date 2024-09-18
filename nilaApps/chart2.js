google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Pending', 'Completed', 'yet tostart'],
    ['Assignment', 1000, 400, 200],
    ['Quiz', 1170, 460, 250],
    ['Presentation', 660, 1120, 300],
    ['Lab', 1030, 540, 350]
    
  ]);

  var options = {
    chart: {
    
    },
    bars: 'vertica', // Required for Material Bar Charts.
    hAxis: {format: 'decimal'},
    height: 400,
    colors: ['#3cb371', '#b4b4b4', '3cb371']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function (e) {

    if (e.target.tagName === 'BUTTON') {
      options.hAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}