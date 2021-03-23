$("button").on("click", (e)=>{
	e.preventDefault();
})

$("button").click(function (argument) {
	if ($("#email").val() == "" || $("#user").val() == "" || $("#password").val() == "" || $("#repassword").val() == "" || $("#terminos").prop('checked') == false) {
		$("#alert").removeClass("hidden")
	}else {
		$("#alert").addClass("hidden")
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
			$("#password").css("border", "1px solid red");
		}else if (check >= 3 && check <= 4) {
			$("#password").css("border", "1px solid orange");
		}else if (check == 5) {
			$("#password").css("border", "1px solid green");
		}
	})

	$("#repassword").on("keyup", function(){
		var passs = $("#password").val();
		var pass2 = $("#repassword").val();

		if (passs === pass2) {
			$("#repassword").css("border", "1px solid green");
		}else{
			$("#repassword").css("border", "1px solid red");
		}

	})
}); 