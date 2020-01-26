var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (this.status == 200) {
    var characters = JSON.parse(this.responseText);
    var characterData = [];
    characters.forEach(function(character) {
      characterData.push([character.data, parseInt(character.cena)]);
    });
    
    var chartOneData = {
      type: 'line',
      title: {
        text: 'Cena złota (aktualizacja statystyk do książek)',
        adjustLayout: 'true'
      },
      tooltip: {
        text: 'Data: %kt<br>Cena: %vvzł'
      },
      scaleY: {
        values: '180:200:1',
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
      id: 'chartThree',
      data: chartOneData,
      height: '100%',
      width: '100%',
    });
    
  }
});

xhr.open('GET', 'http://api.nbp.pl/api/cenyzlota/last/10');

xhr.send();