var bgPage = document.body;

var r = 0,
g = 0,
b = 0;

function bg () {
	if (r <= 127 && g == 0 && b == 0) {
		r ++;
	}
	if (r == 128 && b == 0 && g <= 127) {
		g ++;
	}
	if (r > 0 && g == 128 && b == 0) {
		r --;
	}
	if (r == 0 && g == 128 && b <= 127) {
		b ++;
	}
	if (r <= 127 && g > 0 && b == 128) {
		r ++;
		g --;
	}
    if(r == 128 && g == 0 && b >0) {
        b --;
    }
	setTimeout(function() {
		bg();
	}, 10);
	bgPage.style.background = 'rgb('+r+','+g+','+b+')';
}