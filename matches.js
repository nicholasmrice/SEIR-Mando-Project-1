$(() => {

    const container = $(".container");

    $.ajax({
       headers: { "X-Auth-Token": "66fec67fe350493da1b12ad3cfd9f783" },
       url: `https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED`,
       dataType: "json",
       type: "GET",
    }).then(
      (data) => {
        let matches = data.matches;
        matches.forEach((match, i) => {
         $(`
          <div id="match-info">
          <div id="home-crest">
          <h3 id="home">Home: ${match.homeTeam.name}</h3>
          <div id="away-crest">
          <h3 id="away">Away: ${match.awayTeam.name}</h3>
          <h3>Match Day: ${match.matchday}</h3>
          <button class="active" class="button" id="home">Home Team</button>
          <button class="active" class="button" id="away">Away Team</button>
          </div>
         `).appendTo(container);
      })
    }),
          $('.button').onClick((e) => {
           $(this).toggleClass('active');

  });

         (error) => {
           console.log(error);
  }
  });
