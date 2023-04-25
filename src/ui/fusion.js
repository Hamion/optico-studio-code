window.addEventListener('scroll', function (e) { 
	let _scrollHeight = document.documentElement.scrollTop;
	if (_scrollHeight != 0) {
		document.querySelector('header.fusion').classList.add('scroll');
	} else {
		document.querySelector('header.fusion').classList.remove('scroll');
	}
});