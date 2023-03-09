// function for swapping html content between first div and second div
$(document).ready(function () {
  detectAndSwap();
  $(window).resize(function () {
    detectAndSwap();
  });
});

// detect if the device is mobile/table or laptop
// if the device is mobile/tablet and the content has not swapped, swap content
// if the device is laptop and the content has been swapped, redo swapping
function detectAndSwap() {
  var width = $(window).width();
  if (width < 1000) {
    if ($('.scope-section h1').text() == 'Scopes') {
      swap($('.team-section'), $('.scope-section'));
    }
  } else if (width > 1000) {
    if ($('.scope-section h1').text() !== 'Scopes') {
      swap($('.team-section'), $('.scope-section'));
    }
  }
}

function swap(first, second) {
  var temp = first.html();
  first.html(second.html());
  second.html(temp);
}
