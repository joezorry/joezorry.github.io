function switcher(elem) {
	document.getElementById('about').style.display = 'none';
	document.getElementById('links').style.display = 'none';
	document.getElementById('apps_portfolio').style.display = 'none';
	document.getElementById(elem).style.display = 'inline';

	switch (elem) {

		case 'about':
			triangle_margin = '10px 54px 0 0';
		break;

		case 'links':
        	triangle_margin = '10px 160px 0 0';
        break;

       	case 'apps_portfolio':
             triangle_margin = '10px 270px 0 0';
		break;
	}

	document.getElementById('triangle').style.margin = triangle_margin;
}