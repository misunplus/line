document.addEventListener('DOMContentLoaded', function() {
	let tapMeun = document.querySelector('.tab');
	let tapContent = document.querySelector('.tap-content');
	tapContent.style.display = 'none';
	tapMeun.addEventListener('click', function(ev) {
		if (tapMeun.classList.contains('active')) {
			tapContent.style.display = 'block';
			tapMeun.classList.remove('active');
		} else {
			tapContent.style.display = 'none';
			tapMeun.classList.add('active');
		}
	});
});
