var $radioList=$(".housing_radio .radio_box");$radioList.on("tap",function(){var t=$(this);t.hasClass("active")||($radioList.removeClass("active"),t.addClass("active"))});var $selectTitle=$(".select-title"),$selectList=$(".select-list");$selectTitle.on("tap",function(){$(this).siblings(".select-list").toggle()}),$selectList.find(".select-li").on("tap",function(){var t=$(this),e=t.parent(".select-list"),i=t.text(),s=t.data("val");console.log(i,s),e.siblings(".select-title").text(i).data("val",s),e.hide()});