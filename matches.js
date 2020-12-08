$(() => {
  // $('.button').on('click', (event) => {
  //   event.preventDefault();
  //   event.stopPropagation()
  const container = $(".container");
  $.ajax({
    headers: { "X-Auth-Token": "66fec67fe350493da1b12ad3cfd9f783" },
    url: `https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED`,
    dataType: "json",
    type: "GET",
  }).then(
    (data) => {
      //const userChoice = $(event.target)
      //console.log(data.matches);
      let matches = data.matches;
       matches.forEach((match, i) => {
        $(`
          <div id="match-info">
          <div id="home=crest">
          <h3 id="home">Home: ${match.homeTeam.name}</h3>
          <div id="away-crest">
          <h3 id="away">Away: ${match.awayTeam.name}</h3>
          <h3>Match Day: ${match.matchday}</h3>
          <h4>Winning Odds:</h4>
          <p>Home: ${match.odds.homeWin}, Away: ${match.odds.awayWin}, Draw: ${match.odds.draw}</p>
          <h4>Place Your Bet:</h4>
          <button class="button" id="home">Home Team</button>
          <button class="button" id="away">Away Team</button>
          </div>
          `).appendTo(container);

       //    if (userChoice === '#home') {
       //    alert('You chose ' + '#home');
       // } else { (userChoice === '#away');
       //    alert('You chose ' + '#away');
       //
       //  }
       //})
       })
      });

  // $.ajax({
  //      headers: { "X-Auth-Token": "66fec67fe350493da1b12ad3cfd9f783" },
  //      url: `https://api.football-data.org/v2/competitions/PL/teams`,
  //      dataType: "json",
  //      type: "GET",
  //  }).then(
  //    (data) => {
  //     //console.log(data);
  //     let team = data.teams;
  //     //console.log(team);
  //     team.forEach((crest, i) => {
  //     let logo = team[i].crestUrl
  //     //console.log(team[i].crestUrl);
  //     $(`
  //     <img src="${logo}" alt="crest"/>`
  //   ).appendTo('container')
  //    })
  //   }),
    (error) => {
      console.log(error);
  }
});
