"use strict";

let numbers = [];
let userResponses = [];

let feedbackMessageCreator = {
  givenNumbers: "",
  userNumbers: "",
  finalScore: "",

  setProperties: function (given, user) {
    this.givenNumbers = given.reduce(this.concatenateNumbers, "Given:");
    this.userNumbers = user.reduce(this.concatenateNumbers, "Yours:");
    this.finalScore =
      "Score: " + given.reduce(this.calculatePoints, 0) + "/" + given.length;
  },

  concatenateNumbers: function (message, number) {
    return message + "  " + number;
  },

  calculatePoints: function (points, number, index) {
    return number === userResponses[index] ? ++points : points;
  },

  getMessageFormatted: function () {
    return (
      this.givenNumbers + "\n" + this.userNumbers + "\n\n" + this.finalScore
    );
  },
};

for (let i = 0; i < 5; i++) {
  numbers.push(generateRandomNumber(1, 10));
}

numbers.forEach((num) => alert("Primo numero da memorizzare: " + num));

setTimeout(getUserResponsesAndGiveFeedback, 30000);

function getUserResponsesAndGiveFeedback() {
  userResponses = numbers.map(getResponse);

  feedbackMessageCreator.setProperties(numbers, userResponses);
  alert(feedbackMessageCreator.getMessageFormatted());
}

function getResponse() {
  return parseInt(
    prompt("Inserisci in ordine uno dei numeri mostrati precedentemente:")
  );
}

function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
