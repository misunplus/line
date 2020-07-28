document.addEventListener('DOMContentLoaded', function() {
	let $slideWrap = document.querySelector('.container'),
		$slideContainer = document.querySelector('.slider-container'),
		$slide = document.querySelectorAll('.slide'),
		$pager = document.querySelector('.pager'),
		$pagerBtn = document.querySelectorAll('.pager li'),
		$navPrev = document.getElementById('prev'),
		$navNext = document.getElementById('next'),
		$slideCount = $slide.length,
		$timer = undefined,
		$currentIndex = 0;

	for (var a = 0; a < $slideCount; a++) {
		$slide[a].style.top = a * 100 + '%';
	}

	// 슬라이드 이동 함수
	function goToSlide(idx) {
		$slideContainer.classList.add('animated');
		$slideContainer.style.top = -100 * idx + '%';
		$currentIndex = idx;
		for (let y = 0; y < $pagerBtn.length; y++) {
			$pagerBtn[y].classList.remove('active');
		}
		$pagerBtn[idx].classList.add('active');
	} //goToSlide

	goToSlide(0);

	// 버튼을 클릭하면 슬라이드 이동시키기

	$navPrev.addEventListener('click', function() {
		if ($currentIndex == 0) {
			goToSlide($slideCount - 1);
			console.log($slideCount);
		} else {
			goToSlide($currentIndex - 1);
		}
		console.log('이전');
	});

	$navNext.addEventListener('click', function() {
		if ($currentIndex == $slideCount - 1) {
			goToSlide(0);
		} else {
			goToSlide(Number($currentIndex) + 1);
		}
	});

	function startAutoSlide() {
		$timer = setInterval(function() {
			let nentIdx = ($currentIndex + 1) % $slideCount;
			goToSlide(nentIdx);
		}, 4000);
	}

	startAutoSlide();

	function stopAutoSlide() {
		clearInterval($timer);
	}

	$slideWrap.addEventListener('mouseenter', function() {
		// console.log('안들어간거 같구려');
		clearInterval($timer);
	});
	$slideWrap.addEventListener('mouseleave', function() {
		// console.log('되네?ㅡㅡ;;');
		startAutoSlide();
	});

	for (let x = 0; x < $pagerBtn.length; x++) {
		$pagerBtn[x].addEventListener('click', function(event) {
			console.log(event.target);
			let pagerNum = event.target.getAttribute('data-idx');
			goToSlide(pagerNum);
		});
	}
});
