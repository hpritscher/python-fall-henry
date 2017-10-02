'use strict'

/*$(document).ready(function() {


		$('.addbutton').click(function(){
			var toAdd = $('input').val();
			$('.list ul').append('<li class="item">' + '<input class="checkbox" type="checkbox">' + toAdd +'</li>')
		})

		$('input:checked').parent('li').addClass('striked');
		$('input:checkbox:not(:checked)').parent('li').removeClass('striked');

		$('input').each(function(){
			var checked = $('input').prop('checked');
			$(this).click(function(){

				if (checked == false) {
					$(this).parent('li').toggleClass('striked');
					//$(this).prop('checked');
				}
				if (checked == true) {
					$(this).parent('li').toggleClass('nonstriked');
					//$(this).prop('input:checkbox:not(:checked)');
				}
			})
		}) */

$.ajax ({
  url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
method:"GET",
success: function (data) {
  var results= data.query.results.channel.units.distance
  console.log(results);
},
error:function(error,message){
  console.log(error);
  console.log(message);
}
});
