var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (this.status == 200) {
    var characters = JSON.parse(this.responseText);
    var characterData = [];
    characters.forEach(function(character) {
      characterData.push([character.data, parseInt(character.cena)]);
    });
    
    var chartOneData = {
      type: 'bar3d',
      title: {
        text: 'Cena złota NBP',
        adjustLayout: 'true'
      },
      tooltip: {
        text: 'Data: %kt<br>Cena: %vvzł'
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
      id: 'chartTwo',
      data: chartOneData,
      height: '100%',
      width: '100%',
    });
    
  }
});

xhr.open('GET', 'http://api.nbp.pl/api/cenyzlota/last/10');

xhr.send();