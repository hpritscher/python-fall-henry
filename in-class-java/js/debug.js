//#1//


function js_style(){
  text.style.fontSize = "20px";
  text.style.fontFamily = "arial";
  text.style.color = "dodgerblue";
}


//#2//

function getFormvalue()
{
  var name=document.getElementById("form1");
  for (var i=0;i<name.length;i++)
  {
   if (name.elements[i].value!='Submit')
    {
      console.log(name.elements[i].value);
     }
   }
}


//#3//


function new_background() {
var body = document.getElementsByTagName("body")[0];
var p = docBody.getElementsByTagName("p")[0];
  p = body;
  p.style.background = "rgb(117,120,220)";

}


//#4//

var bold_Items;
window.onload = getBold_items();

function getBold_items()
{
  bold_Items = document.getElementsByTagName('b');
}

function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {
    bold_Items[i].style.color = "green";
    }
}

function return_normal()
{
  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }
}


//#5//

function getAttributes()
{
 var u = document.getElementById("w3r").href;
 alert('The value of the href attribute is : '+u);
 var v = document.getElementById("w3r").hreflang;
 alert('The value of the hreflang attribute is : '+v);
 var w = document.getElementById("w3r").rel;
  alert('The value of the rel attribute is : '+w);
 var x = document.getElementById("w3r").target;
  alert('The value of the taget attribute is : '+x);
 var y = document.getElementById("w3r").type;
  alert('The value of the type attribute is : '+y);
}

console.log(jQuery().jquery);
