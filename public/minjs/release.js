$(".search-input").on("focus",function(){$(".close-icon").show().on("tap",function(){$(this).hide(),$(".search-input").val(" ")})});var $radioList=$(".radio-box .radio-block");$radioList.on("tap",function(){var e=$(this);e.hasClass("selected")||($radioList.removeClass("selected"),e.addClass("selected"))});var $selectTitle=$(".select-title"),$selectList=$(".select-list");$selectTitle.on("tap",function(){$(this).siblings(".select-list").toggle()}),$selectList.find(".select-li").on("tap",function(){var e=$(this),t=e.parent(".select-list"),s=e.text(),l=e.data("val");t.siblings(".select-title").text(s).data("val",l),t.hide()}),$(".publish-block").on("tap",function(){$(".mask").show(),$(".publish-alert").show(),$(".confirm").on("tap",function(){location.href="../release/release_detail.html"})}),$(".icon-back").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()}),$(".sure").on("tap",function(){location.href="../release/release_detail.html"})}),$(".house-cell .radio-block").on("tap",function(){$(this).toggleClass("selected")}),$(".add-house").on("tap",function(){location.href="../release/release_house.html"});