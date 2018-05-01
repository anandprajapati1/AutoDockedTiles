var sectionCount = 0
$(document).ready(function () {
	// var randomTile = []
	autoAlign()
})

function autoAlign() {
	// var index = sectionCount == 0 ? 0 : sectionCount * 3;
	for (let index = sectionCount; index < ($('.tile').length / 6); index++) {
		generateRandom(sectionCount)
		sectionCount++
	}
}

function generateRandom(sectionCount) {
	var arr = [0, 1, 2, 3, 4, 5]
	var x1 = Math.floor(Math.random() * 6)
	var x2 = 0
	if (x1 <= 2) {
		if (x1 < 2) {
			x2 = (x1 + 4) % 6
		} else {
			x2 = x1 + 1
		}
	} else {
		x2 = (x1 + 4) % 6
		if (x1 == 5)
			x2 -= 2
	}

	if (x2 < x1) {
		// swap numbers
		x2 = [x1, x1 = x2][0]
	}

	$('.tile:eq(' + ((sectionCount * 6) + x1) + ')').addClass('big')
	$('.tile:eq(' + ((sectionCount * 6) + x2) + ')').addClass('big')

	if (Math.abs((x1 % 3) - (x2 % 3)) != 2) {
		// if (Math.abs((x1 % 3) - (x2 % 3)) == 1)
		if ((x1 % 3) > (x2 % 3)) {
			$('.tile:eq(' + ((sectionCount * 6) + 0) + ')').css('margin-left', '110px')
		} else {
			// if ((x2 % 3) > (x1 % 3))
			$('.tile:eq(' + ((sectionCount * 6) + 3) + ')').css('margin-left', '110px')
		}
	}
	$('.tile:eq(' + ((sectionCount * 6) + (x1 > x2 ? x1 : x2)) + ')').css('margin-top', '-90px')
}

function addMoreTiles(rowCount=2) {
	for (let i = 0; i < rowCount * 3; i++) {
		$(".tile-container").append('<div class="tile"></div>');
	}
	if($(".parent-container").hasClass("full-screen"))
		$("html, body").animate({ scrollTop: $(".tile-container").height()/2 - 300 }, 300);
	else
		$("html, body").animate({ scrollTop: $(".tile-container").height() }, 300);
	autoAlign();
}

function toggleFullScreen(e){
	$(".parent-container").toggleClass("full-screen");
	$(e).toggleClass("full-screen");
	if($(".parent-container").hasClass("full-screen"))
		$("html, body").animate({ scrollTop: $(".tile-container").height()/2 - 300 }, 300);
	else
		$("html, body").animate({ scrollTop: $(".tile-container").height() }, 300);
}