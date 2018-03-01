var i = 0;

function getNames () {
  var arr = [];
  for(i; i < 5; i++) {
    arr[x] = prompt(' Enter names: ');
  }
  return arr;
}

var names1 = getNames();
var names2 = getNames();

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
