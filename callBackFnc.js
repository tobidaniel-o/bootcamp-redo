const doChores = function (chore, nextThingToDo) {
  console.log(`I finished ${chore}.`);
  nextThingToDo()
};

const getDollars = function(){
  console.log(`You earned $1.`)
}

doChores(`doing the laundry`, getDollars);
