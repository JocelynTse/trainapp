  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9U-ynWrXnbPow3EKtKmLdC3vZqHXB-ls",
    authDomain: "trainapp-d0e36.firebaseapp.com",
    databaseURL: "https://trainapp-d0e36.firebaseio.com",
    projectId: "trainapp-d0e36",
    storageBucket: "trainapp-d0e36.appspot.com",
    messagingSenderId: "122427709115"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let name;
  let destination;
  let frequency;
  let nextArrival;
  let minutesAway;

  $("#submit").on("click", function(event)  {
    event.preventDefault();

    let nameNew = $("#trainName").val().trim();
    let destNew = $("#destination").val().trim();
    let timeNew = $("#firstTrain").val().trim();
    let freqNew = $("#frequency").val().trim();

    database.ref().push({
      name = nameNew,
      destination = destNew,
      frequency = freqNew,
      nextArrival = ,
      mintuesAway = ,
    })
  })
