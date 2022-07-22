const findTheOldest = function (people) {
  const peopleWithAge = people.map(person => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
    return person;
  })
  return peopleWithAge.sort((a, b) => a.age > b.age ? 1 : -1)
                      .pop();
};

// Do not edit below this line
module.exports = findTheOldest;
