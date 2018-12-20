/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.
*/

function friend(friends){
  //your code here
  /*
  var fri = [];
  var len = friends.length;
  for (let i = 0; i < len; i++) {
    if (isNaN(friends[i]) && friends[i].length === 4) {
      fri.push(friends[i]);
    }
  }
  return fri;*/
  return friends.filter(friend => isNaN(friend) && friend.length === 4)
}