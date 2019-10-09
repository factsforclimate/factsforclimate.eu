document.addEventListener("DOMContentLoaded", function(){
// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});

// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});


document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  scrollIt(x);
});
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x = e.touches[0].pageX;
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}
scrollIt(window.innerWidth/2);
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
window.addEventListener('resize', function(){
	scrollIt(window.innerWidth/2);
	
})

	$next = 1;
	$current = 0;
	$interval = 4500;
	$fadeTime = 1000;	
	$imgNum = 7;	
 
	nextFadeIn();

	function nextFadeIn(){
		$('.before img').eq($current).delay($interval).fadeOut($fadeTime)
		.end().eq($next).delay($interval).hide().fadeIn(($fadeTime*2), nextFadeIn);
		    
		if($next < $imgNum-1){ $next++; } else { $next = 0;}
		if($current < $imgNum-1){ $current++; } else { $current =0; }
	};
	
	$next2 = 1;		
	$current2 = 0;	
	$interval2 = 4500;	
	$fadeTime2 = 1000;	
	$imgNum = 7;
	
	next2FadeIn2();
	function next2FadeIn2(){
		$('.after img').eq($current2).delay($interval2).fadeOut($fadeTime2)
		.end().eq($next2).delay($interval2).hide().fadeIn(($fadeTime*2), next2FadeIn2);
		    
		if($next2 < $imgNum-1){ $next2++; } else { $next2 = 0;}
		if($current2 < $imgNum-1){ $current2++; } else { $current2 =0; }
	};
});
