var friendList = ['Alamin','Dithi','Munna','Panna','Moon','Kowser'];

//push(); add last item in Array.
friendList.push('Sohel');
console.log(friendList);
console.log(friendList[0]); //Array index star 0,1,2,3,4.

//pop(); remove the last element of Array.
friendList.pop();
console.log(friendList);

//shift(); remove first element of array
friendList.shift();
console.log(friendList);

//unshift(); add the first element of array
friendList.unshift('Nothing');
console.log(friendList);

//set index
friendList[0] = 'People';
console.log(friendList);

//Check index use indexOf(); if not found return -1.
console.log(friendList.indexOf('Dithi'));

//length of array
console.log(friendList.length);