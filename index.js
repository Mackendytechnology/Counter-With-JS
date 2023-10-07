/*Exercise 1
Créer une fonction compteur La fonction de compteur doit renvoyer une autre fonction. 
Cette fonction renvoyée doit agir comme un compteur, 
renvoyant une valeur numérique qui commence à 1 et s’incrémente à chaque appel.

create a counter function The counter function must return another function. 
This returned function should act as a counter, 
returning a numeric value that starts at 1 and increments with each invocation.*/

function counter() {
  let count = 1;
  return function () {
    count++;
    console.log(count);
  };
}

let counterFunction = counter();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
