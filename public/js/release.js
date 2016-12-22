$('.search-input' ).on('focus', function(){
	$('.close-icon' ).show().on('tap', function(){
		$(this ).hide();
		$('.search-input' ).val( ' ' )
	});
});

var $radioList = $('.radio-box .radio-block');

$radioList.on('tap', function(){
	var $self = $(this);
	if(!$self.hasClass('selected')){
		$radioList.removeClass('selected');
		$self.addClass('selected');
	}

});

var $selectTitle = $('.select-title');
var $selectList = $('.select-list');

$selectTitle.on('tap', function(){
	$(this ).siblings('.select-list' ).toggle();
});

$selectList.find('.select-li').on('tap', function(){
	var $self = $(this);
	var $parent = $self.parent('.select-list');
	var text = $self.text();
	var val = $self.data('val');
	$parent.siblings('.select-title' ).text(text ).data('val',val);
	$parent.hide();
});

$('.publish-block').on('tap', function(){
	$('.mask' ).show();
	$('.publish-alert' ).show();
	$('.confirm' ).on('tap', function(){
		location.href = '../release/release_detail.html'
	})
});

$('.icon-back').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		location.href = '../release/release_detail.html'
	})
});


$('.house-cell .radio-block').on('tap', function(){
	$(this).toggleClass('selected');

});
$('.add-house').on('tap', function(){
	location.href = '../release/release_house.html'
});