function switcher(elem) {
	document.getElementById('about').style.display = 'none';
	document.getElementById('links').style.display = 'none';
	document.getElementById(elem).style.display = 'inline';
	if (elem == 'about') {
		triangle_margin = '10px 54px 0 0';
	} else if (elem == 'links') {
		triangle_margin = '10px 160px 0 0';
	}
	document.getElementById('triangle').style.margin = triangle_margin;
}