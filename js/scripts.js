
var names1 = array();
for(x = 0; x < 5; x++) {
  names1[x] = prompt(' Enter random names: ');
}
alert(' Your first names are: ' + names1);

var names2 = array();
for(x = 0; x < 5; x++) {
  names2[x] = prompt(' Enter random names: ');
}
alert(' Your second names are: ' + names2);

var names = names1.concat(names2);
alert(' All names are: ' + names2)


var newName = prompt(' Enter new name ');
if (names.indexOf(newName) === -1) {
      var x = names.push(newName);
}
else {
  alert(' We could not add your new name to our array ')
}
alert('The new list of names is ' + names);
