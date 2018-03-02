function getNames (amount) {
  var arr = [];
  var i = 0;
  for(i; i < amount; i++) {
    arr[x] = prompt(' Enter names: ');
  }
  return arr;
}

var names1 = getNames(5);
var names2 = getNames(5);

var names = names1.concat(names2);
alert(' All names are: ' + names)


var newName = prompt(' Enter new name ');
if (names.indexOf(newName) === -1) {
    names.push(newName);
}
else {
  alert(' We could not add your new name to our array ')
}
alert('The new list of names is ' + names);
