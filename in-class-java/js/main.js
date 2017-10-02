
//homework//
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;
console.log(today);


//#2//


function leapYear(year){
    var result;
    year = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = is a leap year
    }
    else if(years/100){
      result = isnt a leap year
    }
    else if(years/4){
      result= is a leap year
    }
    else{
      result= isnt a leap year
    }
    console.log(result);


  //#3//
 var tThreeNumbers =

  //#4//

//  var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
//var sorted_arr = arr.slice().sort();
//var results = [];
//for (var i = 0; i < arr.length - 1; i++) {
  //  if (sorted_arr[i + 1] == sorted_arr[i]) {
    //    results.push(sorted_arr[i]);
//    }
//}
// console.log(results);

function consecutiveNum(x){
  var arr =x;
  var result=0;

  for(var i=0; i < arr.length - 1; i++){
    for(var j=1; j< arr.length; j++){
      if(arr[i] === arr[j] && i != j){
        result=true;
        console.log("the list has matching numbers");
        return
      }
      else{
        result=false
        console.log("the list does not have matching numbers");
        return
      }
    }
  }
}


//#12//
function substrings(str1)

var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++)
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}
substrings("dog");


//#13//


function make Alphabet(str) {
    var arr = str.split(''),
        alpha = arr.sort();
    return alpha.join('');
}

console.log(Alphabet("nice"));


//#14//


function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
