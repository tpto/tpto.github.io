var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
	//标签去除动画
	if(e.target && e.target.tagName === 'A'){
		return true
	}
    var a = new Array("西风","吹老","洞庭波","一夜","湘君","白发多","醉后", "不知", "天在水", "满船", "清梦", "压星河");
	var tag = "<span style='"
		   + "-moz-user-select:none;"
		   + "-webkit-user-select:none;"
		   + "-ms-user-select:none;"
		   + "user-select:none;"
		   + "' />"
    var $i = $(tag).text(a[a_idx]);
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": randomHexColor()
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
function randomHexColor() { //随机生成十六进制颜色
 return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}