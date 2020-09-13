$(function(){
	var firstFlag=false; 
	var n=0;
	var t=0;
	var top=0;
	var h;

	setTimeout(function(){
		$("html, body").stop().animate({scrollTop:t}, 800, function(){
			$(".main_inner").addClass("active");
			$(".container > div").eq(n).addClass("active");
			$("nav li").eq(0).addClass("on");
			$(".controller li").eq(n).find("a").addClass("on");
		});
	}, 150); /**/

	$(window).resize(function(){
		h=$(this).height();
		$(".main").css({height:h});
		$(".sub").css({height:h});
	});
	$(window).trigger("resize");
// mousewheel	
	$(".container").mousewheel(function(e, delta){
		if($("body, html").is(":animated")){
			return false;
		}

		if(delta > 0){
			// console.log("up");
			if(n > 0){
				n=n-1;
			}
		}else{
			// console.log("down");
			if(n < 4){
				n=n+1;
			}
		}
		// console.log("n : "+n);

		if(n == 0){
				t=0;
			}else{
				t=$(".sub").eq(n-1).offset().top;
			}

		$("html, body").animate({scrollTop:t}, 800, function(){
			$(".controller strong").html('0'+(n+1));
			$(".container > div").removeClass("active");
			$(".container > div").eq(n).addClass("active");
			$("nav li").removeClass("on");
			$("nav li").eq(n).addClass("on");
			$(".controller li").find("a").removeClass("on");
			$(".controller li").eq(n).find("a").addClass("on");
			if( n == 0 ){
				$(".main_inner h1").removeClass("active");
				$(".main_inner .upper").removeClass("active");
				$("nav").removeClass("active");
			}else{
				$(".main_inner h1").addClass("active");
				$(".main_inner .upper").addClass("active");
				$("nav").addClass("active");
			}
		});
	});
// gnb
	$(".gnb li a").click(function(e){
		e.preventDefault();

		if($("body, html").is(":animated")){ // 2018-07-06
			return false;
		}
		n=$(this).parent().index();
		//	console.log(n);
		if(n == 0){
			t=0;
		}else{
			t=$(".sub").eq(n-1).offset().top;
		}

		$("html, body").animate({scrollTop:t}, 800, function(){
			$(".controller strong").html('0'+(n+1));
			$(".container > div").removeClass("active");
			$(".container > div").eq(n).addClass("active");
			$("nav li").removeClass("on");
			$("nav li").eq(n).addClass("on");
			if( n == 0 ){
				$(".main_inner h1").removeClass("active");
				$(".main_inner .upper").removeClass("active");
				$("nav").removeClass("active");
			}else{
				$(".main_inner h1").addClass("active");
				$(".main_inner .upper").addClass("active");
				$("nav").addClass("active");
			}
		});
	});
// controller
	$(".controller a.up").click(function(e){
		e.preventDefault();
		
		if($("body, html").is(":animated")){
			return false;
		}

		if(n > 0){ // 2018-07-06
				n=n-1;
		}
		// console.log("n : "+n);

		if(n == 0){
				t=0;
			}else{
				t=$(".sub").eq(n-1).offset().top;
			}

		$("html, body").animate({scrollTop:t}, 800, function(){
			$(".controller strong").html('0'+(n+1));
			$(".container > div").removeClass("active");
			$(".container > div").eq(n).addClass("active");
			$("nav li").removeClass("on");
			$("nav li").eq(n).addClass("on");
			$(".controller li").find("a").removeClass("on");
			$(".controller li").eq(n).find("a").addClass("on");
			if( n == 0 ){
				$(".main_inner h1").removeClass("active");
				$(".main_inner .upper").removeClass("active");
				$("nav").removeClass("active");
			}else{
				$(".main_inner h1").addClass("active");
				$(".main_inner .upper").addClass("active");
				$("nav").addClass("active");
			}
		});
	});

	$(".controller a.down").click(function(e, delta){
		e.preventDefault();
		
		if($("body, html").is(":animated")){
			return false;
		}

		if(n < 4){ // 2018-07-06
			n=n+1;
		}
		// console.log("n : "+n);

		if(n == 0){
				t=0;
			}else{
				t=$(".sub").eq(n-1).offset().top;
			}

		$("html, body").stop().animate({scrollTop:t}, 800, function(){
			$(".controller strong").html('0'+(n+1));
			$(".container > div").removeClass("active");
			$(".container > div").eq(n).addClass("active");
			$("nav li").removeClass("on");
			$("nav li").eq(n).addClass("on");
			$(".controller li").find("a").removeClass("on");
			$(".controller li").eq(n).find("a").addClass("on");
			if( n == 0 ){
				$(".main_inner h1").removeClass("active");
				$(".main_inner .upper").removeClass("active");
				$("nav").removeClass("active");
			}else{
				$(".main_inner h1").addClass("active");
				$(".main_inner .upper").addClass("active");
				$("nav").addClass("active");
			}
		});
	});
	
//scroll arrow
	$(".icon_wheel a").click(function(e){
		e.preventDefault();
		top=$(".sub.about").offset().top;
		$("body, html").animate({scrollTop: top }, 400);
	});

});