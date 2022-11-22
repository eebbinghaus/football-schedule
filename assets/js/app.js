const games = document.getElementById("games");

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e2f931f0c7msh9ca877bff6aec7dp1adcb8jsn3c51ce2c3eaf",
//     "X-RapidAPI-Host": "nfl-schedule.p.rapidapi.com",
//   },
// };

// fetch("https://nfl-schedule.p.rapidapi.com/v1/schedules", options)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     var home = data[0].shortName;
//     console.log(home);
//   });

const settings = {
  async: true,
  crossDomain: true,
  url: "https://nfl-schedule.p.rapidapi.com/v1/schedules",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e2f931f0c7msh9ca877bff6aec7dp1adcb8jsn3c51ce2c3eaf",
    "X-RapidAPI-Host": "nfl-schedule.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var game = response.data[0].shortName;
  console.log(game);
  for (let i = 0; i < response.data.length; i++) {
    let gameButton = document.createElement("button");
    gameButton.type = "button";
    gameButton.innerHTML = response.data[i].shortName;
    gameButton.class = "gameBtn";
    gameButton.style =
      " font-size: 16px; max-width: 170px; color: turquoise; background-color: black; margin: 9px; padding: 7px; border-radius: 8px; border: 3px solid #ff319b; box-shadow: 2px 2px 7px turquoise;";
    games.appendChild(gameButton);
  }
});
