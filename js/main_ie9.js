$(function(){
	// iIE 8, 9 제작
	var num=0;

	$(".ball").click(function(){
		if(num < 2){
			num++;
		}
		else{
			num=0;
		}
		 $(this).animate({left : num*200}, 300, function(){
			$(this).removeAttr("class");
			$(this).addClass("ball");
			$(this).addClass("ball"+num);
		 });
		//$(this).css({left : num*200});
	});
});