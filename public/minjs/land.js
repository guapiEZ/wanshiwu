function testVal(){""!=$("#username").val()&&""!=$("#password").val()&&$("#btn").css("background","#ea5404").on("tap",function(){location.href="../info/info_agent.html"})}function testReg(){""!=$("#tel").val()&&""!=$("#code").val()&&""!=$("#pass").val()&&""!=$("#passwd").val()&&""!=$("#iden").val()&&$(".register_button").css("background","#ea5404").on("tap",function(){$(".mask").css("background","#ccc").show(),$(".publish-alert").show(),$(".confirm").on("tap",function(){location.href="../info/info.html"})})}$(".s_left").on("tap",function(){location.href="../land/register.html"}),$(".s_right").on("tap",function(){location.href="../land/passwd.html"}),$(".iden").on("tap",function(){$(".cell-box").toggle(),$(".cell-li").on("tap",function(){var t=$(this).text(),n=$(this).data("val");$(".iden").text(t).data("val",n),$(".cell-box").hide()})});