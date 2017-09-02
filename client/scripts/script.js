$(document).ready(function(){
	
	
	$('#icon')
	.velocity('fadeIn',{
		duration:3000
	})
	.velocity({marginTop:"30px"},{
		duration:600,
		easing:"ease-in-out"
	})
	.velocity("reverse");


	

})