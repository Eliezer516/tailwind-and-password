$("button").click(function (e) {
	e.preventDefault();
	if ($("#email").val() == "" || $("#user").val() == "" || $("#password").val() == "" || $("#repassword").val() == "" || $("#terminos").prop('checked') == false) {
		$("#alert").removeClass("hidden")
		setTimeout(function(){
			$("#alert").addClass("hidden")
		}, 5000)
	}else {
		// $("#alert").addClass("hidden")
		location.reload();
	}
})

$(function(){
	var mayus     = new RegExp("^(?=.*[A-Z])");
	var especial  = new RegExp("^(?=.*[!@#$%&*.])");
	var numero    = new RegExp("^(?=.*[0-9])");
	var minuscula = new RegExp("^(?=.*[a-z])");
	var len       = new RegExp("^(?=.{8,})");

	var expresionesRegu = [mayus, especial, numero, minuscula, len];

	$('#password').on("keyup", function(){
		var pass = $("#password").val();
		var check = 0;

		for(var i = 0; i < 5; i++){
			if(expresionesRegu[i].test(pass)){
				check++;
			}
		}

		if (check >= 0 && check <= 2) {
			$("#password").removeClass("focus:ring-indigo-500");
			$("#password").removeClass("focus:ring-yelow-500");
			$("#password").removeClass("focus:ring-green-500");
			$("#password").addClass("focus:ring-red-500");
		}else if (check >= 3 && check <= 4) {
			$("#password").removeClass("focus:ring-red-500");
			$("#password").removeClass("focus:ring-green-500");
			$("#password").addClass("focus:ring-yellow-500");
		}else if (check == 5) {
			$("#password").removeClass("focus:ring-yellow-500");
			$("#password").removeClass("focus:ring-red-500");
			$("#password").addClass("focus:ring-green-500");
		}
	})

	$("#repassword").on("keyup", function(){
		var passs = $("#password").val();
		var pass2 = $("#repassword").val();

		if (passs === pass2) {
			$("#repassword").addClass("focus:ring-green-500");
		}else{
			$("#repassword").removeClass("focus:ring-green-500");
			$("#repassword").removeClass("focus:ring-indigo-500");
			$("#repassword").addClass("focus:ring-red-500");
		}

	})
}); 