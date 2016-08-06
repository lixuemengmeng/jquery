
$(function(){
		$contianer=$("#contianer");
		$content=$("#content");
		$bigImgDiv=$("#big-img");
		$bigImgs=$("#big-img img")
		$smallImgDiv=$("#small-img");
		$smallImgs=$("#small-img img");
		$bg=$(".bg");
		$bg1=$(".bg1");
		$bg2=$(".bg2");
		$bg3=$(".bg3");
		$prev=$("#prev");
		$next=$("#next");
		$contentWidth=$content.width();
		var nowIndex=0;
		var distance=($("body").width()-$contentWidth)/2;
 		$bigImgDiv.append($bigImgs.eq(0).clone());
 		$prev.on("click",function(){
 			nowIndex--;
 			if(nowIndex==-1){
 				nowIndex=$bigImgs.length-1;
 				$bigImgDiv.css({
 					left:-$contentWidth*(nowIndex-1)
 				});
 			}
 				changeImg(nowIndex);
 		});
 		$next.on("click",function(){
 			nowIndex++;
 			if(nowIndex==$bigImgs.length){
 			 nowIndex=1;
 			$bigImgDiv.css({
				left:-$contentWidth
 				});
 			}
 			changeImg(nowIndex);
 		});
 		$smallImgs.on("click",function(){
 			nowIndex=$(this).index();
 			$(this).css({
 				bottom:30
 			});
 			changeImg(nowIndex);
 		})
 		function changeImg(idx){
 			nowIndex=idx;
 			var leftval=(distance+$contentWidth)*nowIndex;
 			$bigImgDiv.stop().animate({
 				left:-leftval
 			});
			$smallImgs.eq(nowIndex).addClass("select").siblings().removeClass("select");

			$bg1.stop().animate({
				left:-leftval/8
			});

			$bg2.stop().animate({
				left:-leftval/4
			});

			$bg3.stop().animate({
				left:-leftval/2
			});

 		}
		$(window).on("resize",function(){
			resizeHandler();
		});
		resizeHandler();
		function resizeHandler(){
			$bigImgDiv.width((distance+$contentWidth)*($bigImgs.length+1));
			$bg.width($(window).width()*($bigImgs.length+1));
			$content.css({
				marginLeft:distance
			})
			$bigImgs.css({
				// marginLeft:distance,
				marginRight:distance
			});
		}
	
});	



