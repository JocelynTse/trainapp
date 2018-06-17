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

let name = "";
let destination = "";
let frequency = "";
let nextArrival = "";
let minutesAway = "";
var timeNew = "";
var freqNew = "";

$("#submit").on("click", function (event) {
  event.preventDefault();

  var nameNew = $("#trainName").val().trim();
  var destNew = $("#destination").val().trim();
  var timeNew = $("#firstTrain").val().trim();
  var freqNew = $("#frequency").val().trim();

  let timeConverted = moment(timeNew, "HH:mm").subtract(1, "years");
  console.log(timeConverted);

  let currentTime = moment();
  console.log("Current Time: " + moment(currentTime).format("hh.mm"));

  let diffTime = moment().diff(moment(timeConverted), "minutes");
  console.log("Difference: " + diffTime);

  let tRemainder = diffTime % freqNew;
  console.log(tRemainder);

  let tMinsTrain = freqNew - tRemainder;
  console.log("Minutes Next Train: " + tMinsTrain);

  let nextTrain = moment().add(tMinsTrain, "minutes");
  let nextTrainTemp = moment(nextTrain).format("hh.mm");
  console.log("Arrival: " + moment(nextTrain).format("hh.mm"));

  database.ref().push({
    name: nameNew,
    destination: destNew,
    frequency: freqNew,
    nextArrival: nextTrainTemp,
    minutesAway: tMinsTrain,
  })
});

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  name = childSnapshot.val().name;
  destination = childSnapshot.val().destination;
  frequency = childSnapshot.val().frequency;
  nextArrival = childSnapshot.val().nextArrival;
  minutesAway = childSnapshot.val().minutesAway;

  let tRow = $("<tr>");

  let nameTab = $("<td>").text(name);
  let destTab = $("<td>").text(destination);
  let freqTab = $("<td>").text(frequency);
  let nextTab = $("<td>").text(nextArrival);
  let minTab = $("<td>").text(minutesAway);

  tRow.append(nameTab, destTab, freqTab, nextTab, minTab);
  $("tbody").append(tRow);

}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
