$(()=>{
    $.ajax({
        headers: { 'X-Auth-Token': '66fec67fe350493da1b12ad3cfd9f783' },
        url: 'https://api.football-data.org/v2/competitions/PL/teams',
        dataType: 'json',
        type: 'GET',
         
    }).then(
        (data) => {
        console.log(data)

        for (let i = 0; i <= (data.teams.length); i++) {
            console.log(data.teams[i].crestUrl)
            const myImage = (data.teams[i].crestUrl)

            $('<li>').text(data.teams[i].name).appendTo('#team-attributes').css('color', "maroon").css('display', 'block').addClass("teams").attr('id', 'teams');
            $('<li>').text(data.teams[i].address).appendTo('#team-attributes').css('color', "green").css('display', 'block').addClass("address").attr('id', 'address');
            $('<div>').html(data.teams[i].crestUrl).appendTo('#team-attributes'); 
        }
      },
          () => {
          console.log('bad');
})

})