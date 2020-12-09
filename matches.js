$(() => {
  const container = $(".container");
  //const matches = $("#match")

 //  $('.modal-btn').on('click', () => {
 //    $('.modal-bg').addClass('.bg-active');
 // })
 //
 //  $('.modal-close').on('click', () => {
 //    $('.modal-bg').removeClass('.bg-active');
 // })
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

            const awayChoice = `${match.awayTeam.name}`
            const homeChoice = `${match.homeTeam.name}`

            $('#homebtn').on('click', (event) => {
               event.preventDefault();
               event.stopPropagation();
               alert('You chose ' + homeChoice)

          })
            $('#awaybtn').on('click', (event) => {
               event.preventDefault();
               event.stopPropagation();
               alert('You chose ' + awayChoice)

        })
      })
    }),
            (error) => {
              console.log(error);
  }
  });

// append each match to the match div in the container
// need to create a ui where the button already exists and then populate the data
// create a match div in its own const and append the buttons to the div after its creation and then add the on click methods
// for each match iterate over the matches and creating and instance of each
//
//
// make it clear that what the user chose for each card
// declare a variable match div and add on click events and append the buttons



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
