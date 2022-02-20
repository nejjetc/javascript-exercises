const findTheOldest = function (people) {
  let theOdestPerson = people.reduce(function (previousPerson, currentPerson) {
    const currentYear = new Date().getFullYear();

    let previousPersonAge =
      (previousPerson.yearOfDeath ?? currentYear) - previousPerson.yearOfBirth;
    let currentPersonAge =
      (currentPerson.yearOfDeath ?? currentYear) - currentPerson.yearOfBirth;

    return previousPersonAge > currentPersonAge
      ? previousPerson
      : currentPerson;
  });

  return theOdestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
