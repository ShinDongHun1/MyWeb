function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect(); //elem.getBoundingClientRect().top
  const { innerHeight } = window;//window.innerHeight
  return top > innerHeight + (triggerDiff || 0);
}

function isElementEntirelyShow(elem) {
  const { bottom } = elem.getBoundingClientRect(); //elem.getBoundingClientRect().top
  const { innerHeight } = window;//window.innerHeight
  return bottom> innerHeight ;
}

function handleScrollUpFadeIn() {
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
	  fadeIn(elem);
      //elem.style.opacity = "0";
      //elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
 
}

function handle1ScrollOnlyFadeIn() {
  const elems = document.querySelectorAll('.fade-in');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem,-20)) {
      fadeInOnly(elem);
      //elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
    }
  })
 
}

function fadeIn(element) {
    var opacity = 0;
	var translateY =70;
    function increase () {
        opacity += 0.05;
		translateY -=1.9;//값이 클수록 빠르게 올라옴
        if (opacity >= 1 && translateY<=0){
            // complete
            element.style.opacity = 1;
			element.style.transform = 'translateY(0px)';
            return true;
        }else if(opacity >= 1&& translateY>0){//translateY가 0보다 큰 경우
			element.style.transform = 'translateY('+translateY+'px)';
			requestAnimationFrame(increase);
		}else if(opacity < 1 && translateY<=0){// opacity가 1보다 작은 경우
			element.style.opacity = opacity;
			requestAnimationFrame(increase);
		}else{
			element.style.opacity = opacity;
			element.style.transform = 'translateY('+translateY+'px)';
        	requestAnimationFrame(increase);
		}
        
    }
    increase();
}
function fadeInOnly(element) {
    var opacity = 0;
    function increase () {
        opacity += 0.05;
        if (opacity >= 1 ){
            // complete
            element.style.opacity = 1;
            return true;}
   		else if(opacity < 1){// opacity가 1보다 작은 경우
			element.style.opacity = opacity;
			requestAnimationFrame(increase);
		}
        
    }
    increase();
}

window.addEventListener('scroll', handleScrollUpFadeIn);
window.addEventListener('scroll', handle1ScrollOnlyFadeIn );


/*flex-direction 애니매이션 코드 https://codepen.io/osublake/pen/eJGrPN*/
console.clear();



function changeMenuColor(){
	let aisdeBox=document.querySelector(".aside-menu");
	const asideTop =aisdeBox.getBoundingClientRect().top;
	let labelBox=document.querySelector(".checkIcon");
	const labelTop =labelBox.getBoundingClientRect().top;
	if(asideTop>labelTop){
	const bars=document.querySelectorAll('input[id="menuicon"]+label span');
	bars.forEach(bar=>{
		bar.style.background='lightgray';
	})
	}else{
			const bars=document.querySelectorAll('input[id="menuicon"]+label span');
	bars.forEach(bar=>{
		bar.style.background='black';
	})
	}
}
window.addEventListener('scroll', changeMenuColor );

let searchTxt=document.getElementsByClassName("search-txt");

function closeSearchText(){
	searchTxt[0].style.width='0px';
	
}
function openSearchText(){
	searchTxt[0].style.width='140px';
}


		
	

