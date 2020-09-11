document.addEventListener('DOMContentLoaded', function() {
	//슬라이드 최상위 컨테이너
	let $slideWrap = document.querySelector('.container'),
		//슬라이드 컨테이너 ul
		$slideContainer = document.querySelector('.slider-container'),
		//슬라이드 이미지 li
		$slide = document.querySelectorAll('.slide'),
		// 페이지 이동 컨테이너 ul
		$pager = document.querySelector('.pager'),
		// 1 2 3 4 번 이동 네이게이터 li
		$pagerBtn = document.querySelectorAll('.pager li'),
		//이전 다음 컨테이너 ul nets > li.prev
		$navPrev = document.getElementById('prev'),
		//이전 다음 컨테이너 ul nets > li.next
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
		} else {
			goToSlide($currentIndex - 1);
		}
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
		clearInterval($timer);
	});
	$slideWrap.addEventListener('mouseleave', function() {
		startAutoSlide();
	});

	for (let x = 0; x < $pagerBtn.length; x++) {
		$pagerBtn[x].addEventListener('click', function(event) {
			let pagerNum = event.target.getAttribute('data-idx');
			goToSlide(pagerNum);
		});
	}
});
