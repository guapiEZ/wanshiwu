$(".icon-back").on("tap",function(){history.back()}),$(".header-conf").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".booking-conf").on("tap",function(){$(".cancel-alert").hide(),$(".publish-alert").show()}),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()})}),$(".tel-icon").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()})}),$(".booking-room").on("tap",function(){$(".header").css("background","none"),$(".icon-back").css("background","none"),$(".mask").css("background","#ccc").show(),$(".booking-alert").show(),$(".sure").on("tap",function(){location.href="../bespeak/detail.html"}),$(".cancel").on("tap",function(){location.href="../bespeak/order.html"})}),$(".reson-li").on("tap",function(){var n=$(this).index();$(this).toggleClass("active"),2==n&&$(".reson-input").toggle()}),$(".sure-btn").on("tap",function(){$(".mask").show(),$(".cancel-order").show(),$(".confirm").on("tap",function(){history.back()})}),$(".upload-conf").on("tap",function(){$(".mask").show(),$(".upload-alert").show()}),$(".cancel-upload").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()}),$(".sure").on("tap",function(){history.back()})}),$(".change_btn").on("tap",function(){location.href="../bespeak/bespeak_change.html"}),$(".reach_btn").on("tap",function(){location.href="../bespeak/bespeak_contract.html"}),$(".cancel_btn").on("tap",function(){location.href="../bespeak/bespeak_cancel.html"}),$(".time-house").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()}),$(".sure").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()})}),$(".order-btn").on("tap",function(){location.href="../bespeak/detail.html"});