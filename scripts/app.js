$(document).ready(function () {
  // var randomTile = []
  var sectionCount = 0
  for (let index = 0; index < ($('.tile').length / 6); index++) {
    generateRandom(sectionCount)
    sectionCount++
  }

  $('body').on('click', function () {window.location.reload()})
})

function generateRandom (sectionCount) {
  var arr = [0, 1, 2,
    3, 4, 5
  ]
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
}
