$(()=>{
    ///$('form').on('submit', (event) => {
       //event.preventDefault();
      const userInput = $('input[type="text"]').val();
      console.log(userInput)
      $.ajax({
              headers: { 'X-Auth-Token': '66fec67fe350493da1b12ad3cfd9f783' },
              url: 'https://api.football-data.org/v2/competitions/PL/teams',
              dataType: 'json',
              type: 'GET',
          //}).done(function(response) {
          // do something with the response, e.g. isolate the id of a linked resource
          //  console.log(response);
      //});
      }).then(
         (data) => {
          console.log(data)

          for (let i = 0; i <= (data.teams.length); i++) {
              //for (let i=0; i <= (data.season.match))
          $('<li>').text(data.teams[i].name).appendTo('body')
          $('<li>').text(data.season.currentMatchday).appendTo('body').css('color', "maroon").addClass("matchday");
          $('<li>').text(data.teams[6].name).appendTo('body').css('color', 'lightblue').addClass("city").attr('id' , 'MCFC');
      }
      },
          () => {
          console.log('bad');
})

})