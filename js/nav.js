document.addEventListener('DOMContentLoaded', function() {
	const $opt = document.querySelector('.opt');
	const $langList = document.querySelector('.langlist');
	const show = function($langList) {
		$langList.style.display = 'block';
	};
	const hide = function($langList) {
		$langList.style.display = 'none';
	};

	$opt.addEventListener('click', function(eve) {
		if (window.getComputedStyle($langList).display === 'block') {
			hide($langList);
			return;
		}
		show($langList);
	});
});
