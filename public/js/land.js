

function testVal(){
	if($('#username').val() != '' && $('#password').val() != ''){
		$('.land_button').css('background' , '#ea5404' ).on('tap', function(){
			location.href = '../home/home.html'
		})

	}
}
$('.s_left').on('tap', function(){
	location.href = 'register.html'
});

$('.s_right').on('tap', function(){
	location.href = 'passwd.html'
});

function testReg(){
	if($('#tel').val() != '' && $('#code').val() != '' && $('#pass').val() != '' && $('#passed').val() != '' && $('#iden').val() != ''){
		$('.register_button').css('background' , '#ea5404' ).on('tap', function(){
			$('.mask' ).css('background','#ccc').show();
			$('.publish-alert' ).show();
			$('.confirm').on('tap', function(){
				location.href = 'land.html'
			});
		})
	}
}


$('.iden').on('tap', function(){
	$('.cell-box' ).toggle();
	$('.cell-li' ).on('tap', function(){
		var text = $(this ).text();

		var val = $(this ).data('val');

		$('.iden' ).text(text ).data('val', val);
		$('.cell-box' ).hide();
	})
});



