var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (this.status == 200) {
    var response = JSON.parse(this.responseText);
    var be = response
    console.log(be)
    var characters = response[1];
    var characterData = [];
    characters.forEach(function(character) {
      characterData.push([character.date, parseInt(character.value)]);
    });
    
    var chartOneData = {
      type: 'line3d',
      title: {
        text: 'Wzrost GPD w Norwegii',
        adjustLayout: 'true'
      },
      tooltip: {
        text: 'Rok: %kt<br>wartość: %vv%'
      },
      scaleX: {
        item: {
          angle: '-45'
        }
      },
      plotarea: {
        margin: 'dynamic'
      },
      series: [
        {
          values: characterData
        }
      ]
    };
    
    zingchart.render({
      id: 'chartOne',
      data: chartOneData,
      height: '100%',
      width: '100%',
    });
    
  }
});

xhr.open('GET', 'https://api.worldbank.org/v2/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json');

xhr.send();