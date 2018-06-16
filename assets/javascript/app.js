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
  let freqNew;
  let firstTime;
  let timeNew;

  $("#submit").on("click", function(event)  {
    event.preventDefault();

    var nameNew = $("#trainName").val().trim();
    var destNew = $("#destination").val().trim();
    timeNew = $("#firstTrain").val().trim();
    freqNew = $("#frequency").val().trim();

    database.ref().push({
      name: nameNew,
      destination: destNew,
      frequency: freqNew,
      //nextArrival:,
      //minutesAway:,
    })
  })

  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());

    frequency = freqNew;

    firstTime = timeNew;

    let timeConverted = moment(firstTime, "HH:mm"). subtract(1, "years");
    console.log(timeConverted);

    let currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("hh.mm"));

    let diffTime = moment().diff(moment(timeConverted), "minutes");
    console.log("Difference: " + diffTime);

    let tRemainder = diffTime % frequency;
    console.log(tRemainder);

    let tMinsTrain = frequency - tRemainder;
    console.log("Minutes Next Train: " + tMinsTrain);

    let nextTrain = moment().add(tMinsTrain, "minutes");
    console.log("Arrival: " + moment(nextTrain).format("hh.mm"));

    name = snapshot.val("name");
    destination = snapshot.val("destination");
    frequency = snapshot.val("frequency");
    nextArrival = 


    let tRow = $("<tr>");
    
    let nameTab = $("<td").text() 
    
  })
