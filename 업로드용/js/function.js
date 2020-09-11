// 언어 선택 설정
$(function() {
	const $opt = $('.opt');
	const $langList = $opt.find('.langlist');
	$('.opt #lang, .opt label').on('click', function() {
		//슬라이드 토글
		$langList.toggle();
	});
	$langList.find('a').on('click', function(evt) {
		const $value = $(this).text();
		$opt.find('#lang').val($value);
		$(this).parent().addClass('on').siblings().removeClass('on');
		$langList.hide();
		document.location = $(this).attr('href');

		evt.preventDefault();
	});
});
//스크롤 이벤트를 이용한 원페이지 구성
$(function() {
	const $gnb = $('header > .container > nav > .gnb > li > a');
	const arrTopVal = new Array();
	let nowIdx = 0;
	for (let i = 0; i < $gnb.length; i++) {
		arrTopVal[i] = $('article.srv').eq(i).offset().top;
	}

	// 이벤트

	$gnb.on('click', function(evt) {
		nowIdx = $gnb.index(this);
		$('html,body').stop().animate(
			{
				// scrollTop :
			}
		);
	});

	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		for (let i = 0; i < $gnb.length; i++) {
			if (scrollTop >= arrTopVal[i] - 69) {
				$gnb.eq(i).parent().addClass('on').siblings().removeClass('on');
			} else if (scrollTop < arrTopVal[0] - 69) {
				$gnb.parent().removeClass('on');
			}
		}
	});
});
