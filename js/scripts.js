var names1 = Array();
for(x = 0; x < 5; x++) {
  names1[x] = prompt(' Enter random female names: ');
}
alert(' Your female names are: ' + names1);

var names2 = Array();
for(x = 0; x < 5; x++) {
  names2[x] = prompt(' Enter random male names: ');
}
alert(' Your male names are: ' + names2);

var names = names1.concat(names2);
alert(' All names are: ' + names)


var newName = prompt(' Enter new name ');
if (names.indexOf(newName) === -1) {
      var x = names.push(newName);
}
else {
  alert(' We could not add your new name to our array ')
}
alert('The new list of names is ' + names);
