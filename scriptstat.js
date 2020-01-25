var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://manishtamaria.com/storerental/api/v1/books');
xhr.addEventListener('load', function() {
  if (this.status == 200) {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function(){
    var data = google.visualization.arrayToDataTable([
      ['Ceny', 'zł'],
      ['Więcej niż 50zł', 55],
      ['Mniej niż 50zł',   34],
      ['Powyżej 100zł',  11]
  ]);
  var options = {
    is3D: true,
    backgroundColor: 'transparent',
    colors: ['FF3333','FFFF00',"FF9900"],
    fontName: 'Arial',
    chartArea: {bottom:0, top:0}

};
var chart = new google.visualization.PieChart(document.getElementById('chart'));
chart.draw(data, options);

var data2= google.visualization.arrayToDataTable([
  ['Ksiązki', 'Ilość kupionych w tysiącach'],
  ['To Kill a Mockingbird', 739],
  ['Think and Grow Rich', 523],
  ['Wings of Fire', 417],
  ['The Alchemist', 145],
  ['Our Impossible Love', 91],
  ['The Monk who sold his ferrari', 85],
  ['How Dell does it', 73],
  ['The Secret', 57],
  ['Steve Jobs', 28],
  ['Five Point Someone', 10]
]) 
var options2 = {
  backgroundColor: 'transparent',
  colors: ['FFA000'],
  fontName: 'Audiowide',
  chartArea: {top:20}
};
var chart2 = new google.visualization.ColumnChart(document.getElementById("chartTwo"));
chart2.draw(data2, options2);
});
}}
);
xhr.send();
